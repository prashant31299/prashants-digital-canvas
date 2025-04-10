
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageCard from "./ImageCard";

export interface GraphicsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface GraphicsCarouselProps {
  items: GraphicsItem[];
  onViewFull: (imageUrl: string) => void;
}

const GraphicsCarousel = ({ items, onViewFull }: GraphicsCarouselProps) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ImageCard {...item} onViewFull={onViewFull} />
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
};

export default GraphicsCarousel;
