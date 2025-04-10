
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const GraphicsSection = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // IPCS Global graphics
  const ipcsItems = [
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

  // Hilarius Ayurveda graphics
  const ayurvedaItems = [
    {
      id: 1,
      title: "Triphala Churna Product",
      description: "Product showcase with ingredients",
      image: "public/lovable-uploads/0a315e6e-b02b-49fc-9560-4c127b1526bb.png",
      tags: ["Product Photography", "Ayurveda"],
    },
    {
      id: 2,
      title: "Benefits of Triphala Churna",
      description: "Infographic showing health benefits",
      image: "public/lovable-uploads/6bdc40f1-ba67-407f-92d5-6ced405c7ff4.png",
      tags: ["Infographic", "Health Benefits"],
    },
    {
      id: 3,
      title: "Three Pillars of a Healthy Life",
      description: "Wellness pillars infographic",
      image: "public/lovable-uploads/9050fd36-852b-463e-8c40-d06fe4f66dae.png",
      tags: ["Health Education", "Wellness"],
    },
    {
      id: 4,
      title: "Goodness Inside",
      description: "Ingredient breakdown infographic",
      image: "public/lovable-uploads/2119de8a-1e2c-44e5-9dc8-009c505049f3.png",
      tags: ["Product Information", "Ingredients"],
    },
    {
      id: 5,
      title: "Triphala: A Tridoshic Rasayan",
      description: "Ayurvedic educational graphic",
      image: "public/lovable-uploads/e302e323-2ade-4b6e-a429-766f131da9ff.png",
      tags: ["Ayurveda Education", "Health"],
    },
    {
      id: 6,
      title: "How to Consume",
      description: "Usage instructions graphic",
      image: "public/lovable-uploads/400f9efc-1afd-47d5-ad65-62a289e2e9a6.png",
      tags: ["Instructions", "Product Usage"],
    },
    {
      id: 7,
      title: "Comparison with Other Brands",
      description: "Competitive comparison chart",
      image: "public/lovable-uploads/6b6b9cd7-db1a-4323-9f7f-07ed7dde1e5b.png",
      tags: ["Competitive Analysis", "Product Comparison"],
    },
    {
      id: 8,
      title: "Triphala Churna Packaging 1",
      description: "Product packaging design - Front View",
      image: "public/lovable-uploads/97b2e127-114b-470b-8171-e8cc1a04eb68.png",
      tags: ["Packaging Design", "Product"],
    },
    {
      id: 9,
      title: "Triphala Churna Packaging 2",
      description: "Product packaging design - Alternate View",
      image: "public/lovable-uploads/756a496f-2fff-4b34-9697-78a7ce35e99b.png",
      tags: ["Packaging Design", "Product"],
    },
    {
      id: 10,
      title: "Triphala Churna Packaging 3",
      description: "Product packaging design - Close Up",
      image: "public/lovable-uploads/66a9d89a-bd0e-4656-a17d-ab953c10f344.png",
      tags: ["Packaging Design", "Product"],
    },
    {
      id: 11,
      title: "Triphala Churna Packaging 4",
      description: "Product packaging design with background elements",
      image: "public/lovable-uploads/41e02d73-f935-4d44-851f-edf58bd7c37a.png",
      tags: ["Packaging Design", "Brand Identity"],
    },
    {
      id: 12,
      title: "Triphala Churna Packaging 5",
      description: "Complete product packaging design",
      image: "public/lovable-uploads/a2e5ddc8-daeb-42c9-bad4-e9a5eec50413.png",
      tags: ["Packaging Design", "Brand Identity"],
    },
  ];

  // Krishna Travels graphics
  const travelsItems = [
    {
      id: 1,
      title: "Lowest Flight Tickets Guaranteed",
      description: "Promotional banner for flight bookings with zero convenience fees",
      image: "public/lovable-uploads/a5a8ab2e-d850-445d-a3d7-d5485cdb7f17.png",
      tags: ["Travel", "Flight Booking"],
    },
    {
      id: 2,
      title: "Travel Agents B2B Portal",
      description: "B2B portal promotion with 1% cashback offer",
      image: "public/lovable-uploads/894c6ae9-8ce7-454b-8a48-00f73b9c5499.png",
      tags: ["B2B", "Agent Portal"],
    },
    {
      id: 3,
      title: "Agent Connect Platform",
      description: "B2B platform for travel agencies featuring 7K+ connected agents",
      image: "public/lovable-uploads/d07c9a41-3e6e-4862-b683-a78bb4ddde7e.png",
      tags: ["Travel Agency", "Platform"],
    },
    {
      id: 4,
      title: "Jaipur to Delhi Flight",
      description: "One-way flight promotion featuring India Gate",
      image: "public/lovable-uploads/94115097-28ad-451b-af8b-4b4b37772a1b.png",
      tags: ["Flight Route", "Destination"],
    },
    {
      id: 5,
      title: "Jaipur to Mumbai Flight",
      description: "One-way flight promotion featuring Mumbai skyline",
      image: "public/lovable-uploads/c8c2d6a9-5148-4d72-9b72-d02f05be5aa3.png",
      tags: ["Flight Route", "Destination"],
    },
    {
      id: 6,
      title: "Jaipur to Bengaluru Flight",
      description: "One-way flight promotion featuring Bengaluru Palace",
      image: "public/lovable-uploads/32ccefb8-d3ae-4ae8-8aa5-85932e6c8384.png",
      tags: ["Flight Route", "Destination"],
    },
    {
      id: 7,
      title: "Jaipur to Hyderabad Flight",
      description: "One-way flight promotion featuring Charminar",
      image: "public/lovable-uploads/f3420b96-3fbc-4113-b416-46bb8611b1da.png",
      tags: ["Flight Route", "Destination"],
    },
    {
      id: 8,
      title: "Jaipur to Kolkata Flight",
      description: "One-way flight promotion featuring Howrah Bridge",
      image: "public/lovable-uploads/1d0c776a-8dfe-478f-92f1-c2512347d7fa.png",
      tags: ["Flight Route", "Destination"],
    },
    {
      id: 9,
      title: "Jaipur to Chennai Flight",
      description: "One-way flight promotion featuring Marina Beach monument",
      image: "public/lovable-uploads/b53a6eee-d993-42ee-b90e-8019f4140001.png",
      tags: ["Flight Route", "Destination"],
    },
    {
      id: 10,
      title: "Thailand Tourism",
      description: "Promotional banner for Thailand tourism package",
      image: "public/lovable-uploads/7f2d435c-35cc-4a12-9c13-e41ac3178549.png",
      tags: ["International", "Tourism"],
    },
  ];

  const handleViewFull = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  const renderCarousel = (items: typeof ipcsItems) => (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {items.map((item) => (
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
  );

  return (
    <section id="graphics" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Graphics Portfolio</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Here's a showcase of my work in graphics design, promotional materials, and marketing visuals
            for various clients and brands.
          </p>
        </div>

        <Tabs defaultValue="travels" className="w-full mb-8">
          <TabsList className="mx-auto flex justify-center flex-wrap">
            <TabsTrigger value="travels" className="text-sm md:text-base">Krishna Travels</TabsTrigger>
            <TabsTrigger value="ayurveda" className="text-sm md:text-base">Hilarius Ayurveda</TabsTrigger>
            <TabsTrigger value="ipcs" className="text-sm md:text-base">IPCS Global</TabsTrigger>
          </TabsList>
          
          <TabsContent value="travels" className="mt-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-semibold mb-3">Krishna Travels</h3>
              <p className="text-muted-foreground">
                Marketing and promotional graphics created for Krishna Travels, featuring flight deals, 
                destination highlights, and business-to-business travel agent services.
              </p>
            </div>
            {renderCarousel(travelsItems)}
          </TabsContent>
          
          <TabsContent value="ayurveda" className="mt-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-semibold mb-3">Hilarius Ayurveda</h3>
              <p className="text-muted-foreground">
                Promotional graphics and packaging designs created for Hilarius Ayurveda's Triphala Churna product line.
                These designs showcase product benefits, ingredients, and usage instructions.
              </p>
            </div>
            {renderCarousel(ayurvedaItems)}
          </TabsContent>
          
          <TabsContent value="ipcs" className="mt-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h3 className="text-2xl font-semibold mb-3">IPCS Global</h3>
              <p className="text-muted-foreground">
                Promotional materials designed for IPCS Global's educational programs and courses,
                focusing on technology training and digital marketing.
              </p>
            </div>
            {renderCarousel(ipcsItems)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">View more of my graphic design work in my online portfolio.</p>
          
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
