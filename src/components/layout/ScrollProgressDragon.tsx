'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgressDragon() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 bottom-0 z-50">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,0 
             C 20,20 20,40 0,50 
             C -20,60 -20,80 0,100"
          transform="translate(95 0)"
          fill="transparent"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            pathLength: scrollYProgress,
          }}
          filter="url(#glow)"
        />
        <defs>
          <filter id="glow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1.5"
              floodColor="hsl(var(--primary))"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
