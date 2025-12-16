'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const backgroundImage = 'https://framerusercontent.com/images/5bw4N7hlubBAbZhK7wfJGMjIxI.png';


interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = 'Our Commodity Portfolio',
  subtitle = 'Comprehensive Trading Solutions Across Five Major Commodity Categories, Serving Diverse Industrial and Commercial Needs Worldwide.',
}: HeroSectionProps) => {
  // Framer Motion variants for the content
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2, // Subtle delay after the component mounts
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div
      // framer-1kn8do maps to a full-width container
      className="relative w-full h-[50vh] min-h-[350px] overflow-hidden" // Set an explicit height for the hero section
      data-framer-name="hero"
    >
      {/* Background Image: Position absolute, inset: 0px */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage} // Use the imported image source
          alt="A wide, sweeping view representing commodity trading"
          layout="fill"
          objectFit="cover"
          priority
          className="rounded-inherit object-center"
        />
        {/* Optional: Add a subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Area: framer-rw2m05 */}
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center p-4"
        data-framer-name="content"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="max-w-4xl space-y-6">
          {/* Title and Subtitle Container: framer-qsiek0 */}
          <div className="flex flex-col items-center">
            {/* Title: framer-lijf03 */}
            <div className="text-center">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight [text-shadow:0_2px_4px_rgb(0_0_0/50%)]">
                {title}
              </h1>
            </div>

            {/* Subtitle: framer-apa7wt */}
            <div className="text-center mt-4">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-relaxed opacity-90 [text-shadow:0_2px_4px_rgb(0_0_0/50%)]">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;