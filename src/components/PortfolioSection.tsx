
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Preventine",
      description: "Health & Wellness Website",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://preventine.org",
      url: "https://preventine.org",
      category: "website",
      tags: ["Web Design", "Development"],
    },
    {
      id: 2,
      title: "The Good Roots",
      description: "E-commerce Store",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://thegoodroots.store",
      url: "https://thegoodroots.store",
      category: "ecommerce",
      tags: ["E-commerce", "UI/UX"],
    },
    {
      id: 3,
      title: "Orofit",
      description: "Fitness Brand Website",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://orofit.com",
      url: "https://orofit.com",
      category: "website",
      tags: ["Web Design", "Branding"],
    },
    {
      id: 4,
      title: "Vape Marley",
      description: "Product Showcase Website",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://vapemarley.com",
      url: "https://vapemarley.com",
      category: "ecommerce",
      tags: ["E-commerce", "Product Design"],
    },
    {
      id: 5,
      title: "We Switched",
      description: "Digital Studio Website",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://weswitched.studio",
      url: "https://weswitched.studio",
      category: "website",
      tags: ["Web Design", "Development"],
    },
    {
      id: 6,
      title: "India Edite",
      description: "Educational Platform",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://indiaedite.com",
      url: "https://indiaedite.com",
      category: "website",
      tags: ["Web Development", "Education"],
    },
    {
      id: 7,
      title: "Safe Universe Research",
      description: "Research Organization Website",
      image: "https://image.thum.io/get/width/400/crop/600/noanimate/https://safeuniverseresearch.com",
      url: "https://safeuniverseresearch.com",
      category: "website",
      tags: ["Web Design", "Research"],
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Websites", value: "website" },
    { label: "E-commerce", value: "ecommerce" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Portfolio</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Check out some of my recent work. These projects showcase my skills in web development,
            design, and digital marketing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden group border hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load preview for: ${item.url}`);
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Visit Site
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter className="flex gap-2 flex-wrap pt-0">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
