import Hero from "./components/home/hero";
import About from "./components/home/about";
import CoreBusinessesSection from "./components/home/core-business-section";
import Locations from "./components/home/location-section";
import ImageBreaker2 from "./components/home/image-breaker2";
import ImageBreaker3 from "./components/home/image-breaker-3";
import ImageBreaker from "./components/home/image-breaker1";
import GallerySection from "./components/home/gallery-section";
import TestimonialsSection from "./components/home/testimonal-section";
import FAQSection from "./components/home/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      <Hero />
      <About />
      <ImageBreaker />
      <CoreBusinessesSection />
      <ImageBreaker2 />
      <Locations />
      <ImageBreaker3 />
      <GallerySection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/gQ8DgDk7E9yTy…he8.png?scale-down-to=1024&width=3750&height=2499" />
      <TestimonialsSection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/od0Qyj26gghxN…oZU.jpg?scale-down-to=1024&width=5464&height=3640" />
      <FAQSection />
      <ImageBreaker imageSrc="https://framerusercontent.com/images/ADxhBrAY9KMAA…zkQ.png?scale-down-to=1024&width=1898&height=1267" />
    </div>
  );
}
