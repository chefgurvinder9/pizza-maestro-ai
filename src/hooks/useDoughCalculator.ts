import { useState, useMemo, useCallback } from 'react';
import {
  INGREDIENT_RATIOS,
  YEAST_CONVERSIONS,
  HYDRATION_STYLES,
  FERMENTATION_FACTORS,
  BASE_FERMENTATION_HOURS,
  YeastType,
} from '@/lib/constants';

export interface CalculatorInputs {
  flour: number;
  hydration: number;
  yeastType: YeastType;
  temperature: number;
}

export interface CalculatedIngredients {
  flour: number;
  salt: number;
  sugar: number;
  yeast: number;
  oil: number;
  water: number;
  afterDoughOil: number;
  semolina: number;
  milk: number;
  bakingSoda: number;
}

export interface CalculatorResult {
  ingredients: CalculatedIngredients;
  totalWeight: number;
  fermentationHours: number;
  readyTime: Date;
  pizzaStyle: (typeof HYDRATION_STYLES)[number];
}

const DEFAULT_INPUTS: CalculatorInputs = {
  flour: 1000,
  hydration: 65,
  yeastType: 'instantDry',
  temperature: 22,
};

export function useDoughCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(DEFAULT_INPUTS);

  const updateInput = useCallback(<K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  }, []);

  const pizzaStyle = useMemo(() => {
    return HYDRATION_STYLES.find(
      style => inputs.hydration >= style.min && inputs.hydration <= style.max
    ) || HYDRATION_STYLES[0];
  }, [inputs.hydration]);

  const temperatureFactor = useMemo(() => {
    const temp = inputs.temperature;
    if (temp <= 8) return FERMENTATION_FACTORS.cold.factor;
    if (temp <= 20) return FERMENTATION_FACTORS.cool.factor;
    if (temp <= 25) return FERMENTATION_FACTORS.room.factor;
    return FERMENTATION_FACTORS.warm.factor;
  }, [inputs.temperature]);

  const result = useMemo((): CalculatorResult | null => {
    if (!inputs.flour || inputs.flour <= 0) return null;

    const flour = inputs.flour;
    
    // Calculate ingredients based on ratios
    // Water and milk are adjusted by hydration level
    const baseWaterRatio = INGREDIENT_RATIOS.water;
    const baseMilkRatio = INGREDIENT_RATIOS.milk;
    const totalLiquidRatio = baseWaterRatio + baseMilkRatio;
    
    // Target hydration as a ratio (hydration is percentage of flour)
    const targetLiquidRatio = inputs.hydration / 100;
    const liquidMultiplier = targetLiquidRatio / totalLiquidRatio;

    // Adjust yeast based on type
    const yeastMultiplier = YEAST_CONVERSIONS[inputs.yeastType];

    const ingredients: CalculatedIngredients = {
      flour: flour,
      salt: Math.round(flour * INGREDIENT_RATIOS.salt * 100) / 100,
      sugar: Math.round(flour * INGREDIENT_RATIOS.sugar * 100) / 100,
      yeast: Math.round(flour * INGREDIENT_RATIOS.yeast * yeastMultiplier * 100) / 100,
      oil: Math.round(flour * INGREDIENT_RATIOS.oil * 100) / 100,
      water: Math.round(flour * INGREDIENT_RATIOS.water * liquidMultiplier * 100) / 100,
      afterDoughOil: Math.round(flour * INGREDIENT_RATIOS.afterDoughOil * 100) / 100,
      semolina: Math.round(flour * INGREDIENT_RATIOS.semolina * 100) / 100,
      milk: Math.round(flour * INGREDIENT_RATIOS.milk * liquidMultiplier * 100) / 100,
      bakingSoda: Math.round(flour * INGREDIENT_RATIOS.bakingSoda * 100) / 100,
    };

    const totalWeight = Object.values(ingredients).reduce((sum, val) => sum + val, 0);

    // Calculate fermentation time
    // Higher yeast = faster, higher temp = faster
    const yeastFactor = 1 / yeastMultiplier; // More yeast = less time
    const fermentationHours = Math.round(
      BASE_FERMENTATION_HOURS * temperatureFactor * (yeastFactor * 0.5 + 0.5)
    );

    const readyTime = new Date();
    readyTime.setHours(readyTime.getHours() + fermentationHours);

    return {
      ingredients,
      totalWeight: Math.round(totalWeight),
      fermentationHours,
      readyTime,
      pizzaStyle,
    };
  }, [inputs, pizzaStyle, temperatureFactor]);

  const reset = useCallback(() => {
    setInputs(DEFAULT_INPUTS);
  }, []);

  return {
    inputs,
    updateInput,
    result,
    pizzaStyle,
    reset,
  };
}
