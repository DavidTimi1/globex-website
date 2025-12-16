"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CardParallaxImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // VERY subtle – this is the Framer secret
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div ref={ref} className="relative h-56 overflow-hidden rounded-lg">
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        loading="lazy"
      />
    </div>
  );
}
