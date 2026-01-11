import { useState } from 'react';
import { Wheat, Droplets, Timer, Thermometer, ChefHat } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useDoughCalculator } from '@/hooks/useDoughCalculator';
import { useLanguage } from '@/hooks/useLanguage';
import { YEAST_INFO, YeastType, HYDRATION_STYLES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function BentoCalculator() {
  const { inputs, updateInput, result, pizzaStyle } = useDoughCalculator();
  const { t, isHindi } = useLanguage();
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    if (result) setShowResults(true);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(isHindi ? 'hi-IN' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      {/* Bento Grid Inputs */}
      <div className="bento-grid">
        {/* Flour Input - Featured */}
        <div className="bento-item featured animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-primary/10">
              <Wheat className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">{t.calculator.flour}</h3>
              <p className="text-sm text-muted-foreground">{t.calculator.grams}</p>
            </div>
          </div>
          <Input
            type="number"
            value={inputs.flour || ''}
            onChange={(e) => updateInput('flour', Number(e.target.value))}
            placeholder={t.calculator.flourPlaceholder}
            className="text-2xl font-bold h-14 bg-background/50"
            min={100}
            max={10000}
          />
        </div>

        {/* Hydration Slider */}
        <div className="bento-item featured animate-fade-in-up stagger-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-secondary/20">
                <Droplets className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{t.calculator.hydration}</h3>
                <p className="text-sm text-muted-foreground">{pizzaStyle.emoji} {isHindi ? pizzaStyle.styleHi : pizzaStyle.style}</p>
              </div>
            </div>
            <span className="text-3xl font-bold text-primary">{inputs.hydration}%</span>
          </div>
          <Slider
            value={[inputs.hydration]}
            onValueChange={([val]) => updateInput('hydration', val)}
            min={55}
            max={85}
            step={1}
            className="mt-2"
          />
          <div className="hydration-indicator mt-3" />
          <p className="text-xs text-muted-foreground mt-2">{pizzaStyle.description}</p>
        </div>

        {/* Yeast Type */}
        <div className="bento-item animate-fade-in-up stagger-2">
          <div className="flex items-center gap-2 mb-3">
            <ChefHat className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">{t.calculator.yeastType}</h3>
          </div>
          <div className="space-y-2">
            {(Object.keys(YEAST_INFO) as YeastType[]).map((type) => (
              <button
                key={type}
                onClick={() => updateInput('yeastType', type)}
                className={cn(
                  'w-full p-2 rounded-lg text-left transition-all text-sm',
                  inputs.yeastType === type
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/50 hover:bg-muted'
                )}
              >
                <span className="mr-2">{YEAST_INFO[type].emoji}</span>
                {isHindi ? YEAST_INFO[type].nameHi : YEAST_INFO[type].name}
              </button>
            ))}
          </div>
        </div>

        {/* Temperature */}
        <div className="bento-item animate-fade-in-up stagger-3">
          <div className="flex items-center gap-2 mb-3">
            <Thermometer className="w-5 h-5 text-accent" />
            <h3 className="font-semibold">{t.calculator.temperature}</h3>
          </div>
          <div className="flex items-center gap-3">
            <Input
              type="number"
              value={inputs.temperature}
              onChange={(e) => updateInput('temperature', Number(e.target.value))}
              className="text-xl font-bold h-12 bg-background/50"
              min={2}
              max={40}
            />
            <span className="text-2xl">°C</span>
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <Button
        onClick={handleCalculate}
        className="btn-warm w-full h-14 text-lg animate-fade-in-up stagger-4"
        disabled={!inputs.flour || inputs.flour <= 0}
      >
        {t.calculator.calculate}
      </Button>

      {/* Results */}
      {showResults && result && (
        <div className="glass-card p-6 animate-scale-in">
          <h2 className="font-display text-2xl font-bold text-center mb-6">
            {t.calculator.results}
          </h2>
          
          <div className="space-y-3 mb-6">
            {Object.entries(result.ingredients).map(([key, value], i) => (
              <div key={key} className="ingredient-item" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="font-medium capitalize">
                  {t.ingredients[key as keyof typeof t.ingredients] || key}
                </span>
                <span className="font-bold text-primary">{value}g</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-xl mb-4">
            <div className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-primary" />
              <span>{t.calculator.readyIn}</span>
            </div>
            <div className="text-right">
              <div className="font-bold text-lg">{result.fermentationHours}h</div>
              <div className="text-sm text-muted-foreground">@ {formatTime(result.readyTime)}</div>
            </div>
          </div>

          <Button
            onClick={() => {
              const message = `*Pizza Dough Recipe* (Chef Gurvinder)\n\n` +
                Object.entries(result.ingredients)
                  .map(([k, v]) => `• ${t.ingredients[k as keyof typeof t.ingredients] || k}: ${v}g`)
                  .join('\n') +
                `\n\n_${t.tagline}_`;
              window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white"
          >
            {t.calculator.shareWhatsApp}
          </Button>
        </div>
      )}
    </div>
  );
}
