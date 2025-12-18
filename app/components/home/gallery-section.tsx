import { VerticalTicker } from "./vertical-ticker";
import { AnimatedWords } from "@/components/animated-words";

const col1 = [
  "https://framerusercontent.com/images/Y5JAFyps4emoWfMMb3xat5dm6k.png",
  "https://framerusercontent.com/images/TRrt33TVozFunlhss2TbTdRR2A.png",
  "https://framerusercontent.com/images/w6v7aaWzCrHwf3ZDRtWBZNm5dg.png",
];

const col2 = [
  "https://framerusercontent.com/images/ghpe9sRa8sZWQn1MVFHkPMxjEw.png",
  "https://framerusercontent.com/images/Gs3Z3iMLjsu7cUXxItfFS8oCuak.png",
  "https://framerusercontent.com/images/V4tff2o0wESwAn1ZtQ2XtsPipko.png",
];

const col3 = [
  "https://framerusercontent.com/images/P0KnADZFC6jfbUSNPV1g4x40Wk.png",
  "https://framerusercontent.com/images/d9gQTfRlMTU5ebfGkBxCtiaS4U.png",
  "https://framerusercontent.com/images/MZsE8fmdopt7yd0TqM7jvwmBMQ.png",
];

export default function GallerySection() {
  return (
    <section className="py-14 md:py-20 bg-white space-y-14">
      {/* Heading */}
      <div className="space-y-3 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl lg:font-bold font-semibold">
          <AnimatedWords text="Products Showcase" delayOffset={3} />
        </h2>
        <p className="text-zinc-500">
          A Global Footprint of Excellence
        </p>
      </div>

      {/* Gallery */}
      <div className="mx-auto grid max-w-6xl grid-rows-3 lg:grid-cols-3 gap-4">
        <VerticalTicker images={col1} duration={14} />
        <VerticalTicker images={col2} duration={14} reverse />
        <VerticalTicker images={col3} duration={14} />
      </div>
    </section>
  );
}
