
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GraphicsSection = () => {
  const { toast } = useToast();
  
  // These are placeholder items - you'll need to replace with your actual graphics work
  const graphicsItems = [
    {
      id: 1,
      title: "3D Cat Character",
      description: "3D modeling and rendering for character design",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&auto=format&fit=crop&q=80",
      tags: ["3D Modeling", "Character Design"],
    },
    {
      id: 2,
      title: "Gaming Poster",
      description: "Promotional poster for a gaming event",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
      tags: ["Poster Design", "Gaming"],
    },
    {
      id: 3,
      title: "Brand Logo Design",
      description: "Logo concept for a premium brand",
      image: "https://images.unsplash.com/photo-1503386435953-66943ba30817?w=800&auto=format&fit=crop&q=80",
      tags: ["Logo Design", "Branding"],
    },
    {
      id: 4,
      title: "Social Media Graphics",
      description: "Content templates for Instagram and Facebook",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
      tags: ["Social Media", "Templates"],
    },
    {
      id: 5,
      title: "Product Packaging",
      description: "Creative packaging design for cosmetics",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=80",
      tags: ["Packaging", "Product Design"],
    },
    {
      id: 6,
      title: "3D Character Animation",
      description: "Character design and animation for games",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=80",
      tags: ["3D Design", "Animation"],
    },
  ];

  const handleViewFull = () => {
    toast({
      title: "Graphics Portfolio",
      description: "Contact me to view the full resolution graphics portfolio."
    });
  };

  return (
    <section id="graphics" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Graphics Portfolio</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Here's a showcase of my work in graphics design, 3D modeling, and visual content creation.
          </p>
          <p className="text-sm text-muted-foreground mb-8 p-3 border rounded bg-muted/20">
            Note: This section displays placeholder graphics. To view my actual graphics work, please visit my <a href="https://drive.google.com/drive/folders/1YlgcSy3tNJPe75ZRViXSfePC_-no9OdF" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Drive Portfolio</a>.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {graphicsItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group border hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                        <Button size="sm" variant="secondary" onClick={handleViewFull}>
                          <ExternalLink className="h-4 w-4 mr-2" /> View Full
                        </Button>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static left-0 translate-y-0 mr-4" />
            <CarouselNext className="relative static right-0 translate-y-0" />
          </div>
        </Carousel>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <a 
              href="https://drive.google.com/drive/folders/1YlgcSy3tNJPe75ZRViXSfePC_-no9OdF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Download className="h-4 w-4 mr-2" /> View Full Graphics Portfolio
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GraphicsSection;
