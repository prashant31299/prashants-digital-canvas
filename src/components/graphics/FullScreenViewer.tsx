
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FullScreenViewerProps {
  selectedImage: string | null;
  onClose: () => void;
}

const FullScreenViewer = ({ selectedImage, onClose }: FullScreenViewerProps) => {
  if (!selectedImage) return null;

  const handleContainerClick = (e: React.MouseEvent) => {
    // Only close if clicking the background, not the image itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={handleContainerClick}
    >
      <div className="relative max-w-5xl max-h-[90vh]">
        <Button 
          variant="secondary" 
          size="icon" 
          className="absolute -top-12 right-0"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="h-4 w-4" />
        </Button>
        <img 
          src={selectedImage} 
          alt="Full size graphic" 
          className="max-w-full max-h-[85vh] object-contain"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
        />
      </div>
    </div>
  );
};

export default FullScreenViewer;
