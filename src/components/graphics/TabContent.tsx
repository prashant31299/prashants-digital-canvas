
import { GraphicsItem } from "./GraphicsCarousel";
import GraphicsCarousel from "./GraphicsCarousel";

interface TabContentProps {
  title: string;
  description: string;
  items: GraphicsItem[];
  onViewFull: (imageUrl: string) => void;
}

const TabContent = ({ title, description, items, onViewFull }: TabContentProps) => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <GraphicsCarousel items={items} onViewFull={onViewFull} />
    </>
  );
};

export default TabContent;
