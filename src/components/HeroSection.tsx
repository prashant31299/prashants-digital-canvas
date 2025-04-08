
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm Prashant Chavan 👋
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Website Developer & Digital Marketer
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="px-8 py-6 text-base rounded-full"
              asChild
            >
              <a href="#portfolio">Check My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base rounded-full"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <div className="mt-20 animate-bounce">
            <a href="#about" aria-label="Scroll to About section">
              <ArrowDown className="mx-auto w-6 h-6 text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
