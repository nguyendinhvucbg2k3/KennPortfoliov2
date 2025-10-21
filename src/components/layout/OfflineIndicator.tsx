'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOffIcon } from '@/components/icons/WifiOffIcon';
import { cn } from '@/lib/utils';

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Set initial status from browser
    if (typeof navigator !== 'undefined') {
        setIsOnline(navigator.onLine);
    }
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, type: 'spring', stiffness: 200 } }}
            className="text-primary"
          >
            <WifiOffIcon className="h-24 w-24 animate-flicker" />
          </motion.div>
          
          <GlitchText text="CONNECTION LOST" />
          
          <p className="mt-4 text-center text-muted-foreground">
            Please check your internet connection. <br/> The application will resume once the connection is restored.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const GlitchText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={cn("relative font-headline text-3xl md:text-4xl text-center font-bold uppercase tracking-widest mt-8", className)}>
      <span className="absolute inset-0 text-primary opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', animation: 'glitch-top 0.5s linear infinite' }}>{text}</span>
      <span className="absolute inset-0" style={{ animation: 'glitch-main 1.5s linear infinite' }}>{text}</span>
      <span className="absolute inset-0 text-cyan-400 opacity-80" style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)', animation: 'glitch-bottom 0.7s linear infinite' }}>{text}</span>
    </div>
  );
}
