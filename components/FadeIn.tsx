"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Na mobilu se první obsah může nezkobrazit kvůli whileInView; pokud true, animace proběhne hned po načtení. */
  animateOnMount?: boolean;
};

export function FadeIn({ children, className, delay = 0, animateOnMount = false }: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={animateOnMount ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      {...(animateOnMount
        ? {}
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
          })}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
