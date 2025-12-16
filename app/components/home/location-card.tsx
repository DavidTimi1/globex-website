import { motion } from "framer-motion";
import { CardParallaxImage } from "./card-parallax-image";

export function LocationCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative rounded-lg border border-black/10 bg-neutral-50 p-4"
    >
      <CardParallaxImage src={image} alt={title} />

      <div className="mt-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-neutral-600">{subtitle}</p>
      </div>

      {/* Wave background */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="h-full w-full rounded-lg"
          style={{
            backgroundImage:
              'url("https://framerusercontent.com/images/N9GeBa0CRBIhhvb9pYLnIeWF4gQ.svg")',
            backgroundSize: "20px",
          }}
        />
      </div>
    </motion.div>
  );
}
