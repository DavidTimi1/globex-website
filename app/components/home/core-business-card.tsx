// app/components/core-business-card.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CoreBusiness } from "@/data/core-businesses";

export function CoreBusinessCard({
  title,
  description,
  image,
  reverse,
}: CoreBusiness) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "grid gap-8 md:grid-cols-2 items-center",
        reverse && "md:[&>*:first-child]:order-2"
      )}
    >
      {/* Image */}
      <div className="relative h-[320px] w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative rounded-xl border bg-background p-8 shadow-sm">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-4 text-muted-foreground">{description}</p>

        <Button
          asChild
          className="mt-6 rounded-full bg-neutral-900 px-6 hover:bg-neutral-800"
        >
          <Link href="/products">Learn More</Link>
        </Button>
      </div>
    </motion.div>
  );
}
