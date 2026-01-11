import { useState, useEffect, useCallback } from 'react';
import { LANG_STRINGS, Language } from '@/lib/constants';

const STORAGE_KEY = 'pizzaiolo-language';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'hi') return saved;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  const t = LANG_STRINGS[language];
  const isHindi = language === 'hi';

  return { language, setLanguage, t, isHindi };
}
