'use client';

import { useLanguage } from '@/context/language-context';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'rounded-full px-3 py-1 text-xs',
          language === 'vi' && 'bg-muted text-foreground'
        )}
        onClick={() => setLanguage('vi')}
      >
        VI
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'rounded-full px-3 py-1 text-xs',
          language === 'en' && 'bg-muted text-foreground'
        )}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
}
