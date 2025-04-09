
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
import { ExternalLink, Download, Maximize, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GraphicsSection = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Updated with actual graphics work from IPCS Global
  const graphicsItems = [
    {
      id: 1,
      title: "Industrial Automation",
      description: "Promotional graphic for Industrial Automation course",
      image: "public/lovable-uploads/dbd97283-009e-4f09-b1ec-8621c7b4b48f.png",
      tags: ["Marketing", "Course Promotion"],
    },
    {
      id: 2,
      title: "Industrial Automation - Package",
      description: "Course package advertisement with salary details",
      image: "public/lovable-uploads/324dc493-18fb-4caf-aeb5-dd9e7938a670.png",
      tags: ["Social Media", "Advertisement"],
    },
    {
      id: 3,
      title: "Building Management System",
      description: "Promotional poster for BMS training program",
      image: "public/lovable-uploads/ba06258e-d905-4f0b-b46a-813924a01aa0.png",
      tags: ["Poster Design", "Technology"],
    },
    {
      id: 4,
      title: "Python & Data Science",
      description: "Training course advertisement for Python & Data Science",
      image: "public/lovable-uploads/ca87af4e-189d-472c-a221-58c031c80bee.png",
      tags: ["Course Promotion", "Tech Education"],
    },
    {
      id: 5,
      title: "Digital Marketing Training",
      description: "Promotional graphic for Digital Marketing course",
      image: "public/lovable-uploads/f50ec255-3074-442e-b8f3-419072106c1c.png",
      tags: ["Marketing", "Education"],
    },
    {
      id: 6,
      title: "Data Analytics & Power BI",
      description: "Course advertisement featuring AI/robotics imagery",
      image: "public/lovable-uploads/d8b85c67-18ba-4dc4-8c8c-c2d6a12a0a8d.png",
      tags: ["Tech Education", "AI"],
    },
    {
      id: 7,
      title: "Digital Marketing Course",
      description: "Vibrant promotional banner for digital marketing training",
      image: "public/lovable-uploads/abc499c4-b77d-4d69-8aed-9a966efd6da5.png",
      tags: ["Social Media", "Marketing"],
    },
  ];

  const handleViewFull = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <section id="graphics" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Graphics Portfolio</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Here's a showcase of my work in graphics design, promotional materials, and marketing visuals.
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
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                        <Button size="sm" variant="secondary" onClick={() => handleViewFull(item.image)}>
                          <Maximize className="h-4 w-4 mr-2" /> View Full
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
          <p className="text-muted-foreground mb-4">These are promotional graphics I designed for IPCS Global training programs.</p>
          
          <Button asChild variant="outline">
            <a 
              href="https://drive.google.com/drive/folders/1YlgcSy3tNJPe75ZRViXSfePC_-no9OdF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Download className="h-4 w-4 mr-2" /> View More Graphics Work
            </a>
          </Button>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute -top-12 right-0"
              onClick={closeFullScreen}
            >
              <X className="h-4 w-4" />
            </Button>
            <img 
              src={selectedImage} 
              alt="Full size graphic" 
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GraphicsSection;
