
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Maximize } from "lucide-react";

interface ImageCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  onViewFull: (imageUrl: string) => void;
}

const ImageCard = ({ id, title, description, image, tags, onViewFull }: ImageCardProps) => {
  return (
    <Card className="overflow-hidden group border hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
          <Button 
            size="sm" 
            variant="secondary" 
            onClick={() => onViewFull(image)}
            aria-label={`View full size image of ${title}`}
          >
            <Maximize className="h-4 w-4 mr-2" /> View Full
          </Button>
        </div>
      </div>
      <CardContent className="pt-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {tags.map((tag, index) => (
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
  );
};

export default ImageCard;
