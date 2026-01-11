import { Globe } from 'lucide-react';
import { BentoCalculator } from '@/components/calculator/BentoCalculator';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background relative">
      {/* Pizza Background */}
      <div className="pizza-bg" />
      
      {/* Warm gradient overlay */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container max-w-lg mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <header className="text-center mb-8 animate-fade-in-up">
          {/* Language Toggle */}
          <div className="flex justify-end mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="gap-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'हिन्दी' : 'English'}
            </Button>
          </div>

          {/* Logo */}
          <img
            src="/logo-512.png"
            alt="Chef Gurvinder"
            className="w-28 h-28 mx-auto mb-4 drop-shadow-lg animate-float"
          />
          
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">
            {t.appName}
          </h1>
          <p className="text-muted-foreground italic">
            {t.tagline}
          </p>
        </header>

        {/* Main Calculator */}
        <main>
          <BentoCalculator />
        </main>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>Made with 🍕 by Chef Gurvinder</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
