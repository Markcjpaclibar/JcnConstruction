"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const fadeUpVariants: Variants = {
  hidden: (distance: number) => ({
    opacity: 0,
    y: distance,
  }),

  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.4,
  distance = 30,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      custom={distance}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}