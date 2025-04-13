
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FullScreenViewer from "./graphics/FullScreenViewer";
import TabContent from "./graphics/TabContent";
import { fetchGraphicsByCategory } from "@/services/graphicsService";
import { GraphicsItem } from "./graphics/GraphicsCarousel";
import { ipcsItems, ayurvedaItems, travelsItems, xclusiveItems } from "./graphics/graphicsData";
import ImportGraphicsButton from "./admin/ImportGraphicsButton";

const GraphicsSection = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<'database' | 'local'>('database');
  
  // State to hold category data
  const [xclusiveData, setXclusiveData] = useState<GraphicsItem[]>([]);
  const [travelsData, setTravelsData] = useState<GraphicsItem[]>([]);
  const [ayurvedaData, setAyurvedaData] = useState<GraphicsItem[]>([]);
  const [ipcsData, setIpcsData] = useState<GraphicsItem[]>([]);

  useEffect(() => {
    const loadGraphicsData = async () => {
      setLoading(true);
      try {
        // Load data for each category
        const xclusiveResult = await fetchGraphicsByCategory('xclusive');
        const travelsResult = await fetchGraphicsByCategory('travels');
        const ayurvedaResult = await fetchGraphicsByCategory('ayurveda');
        const ipcsResult = await fetchGraphicsByCategory('ipcs');

        console.log("Data fetch results:", {
          xclusive: xclusiveResult.length,
          travels: travelsResult.length,
          ayurveda: ayurvedaResult.length,
          ipcs: ipcsResult.length
        });

        // Check if we got any data from the database
        const hasDbData = 
          xclusiveResult.length > 0 || 
          travelsResult.length > 0 || 
          ayurvedaResult.length > 0 || 
          ipcsResult.length > 0;

        // Set the data source for user feedback
        setDataSource(hasDbData ? 'database' : 'local');
        
        // Set the data, using db data when available, fallback to local otherwise
        setXclusiveData(xclusiveResult.length > 0 ? xclusiveResult : xclusiveItems);
        setTravelsData(travelsResult.length > 0 ? travelsResult : travelsItems);
        setAyurvedaData(ayurvedaResult.length > 0 ? ayurvedaResult : ayurvedaItems);
        setIpcsData(ipcsResult.length > 0 ? ipcsResult : ipcsItems);
        
      } catch (err) {
        console.error("Error loading graphics data:", err);
        setError("Failed to load graphics data. Using local data as fallback.");
        setDataSource('local');
        
        // Use local data as fallback
        setXclusiveData(xclusiveItems);
        setTravelsData(travelsItems);
        setAyurvedaData(ayurvedaItems);
        setIpcsData(ipcsItems);
      } finally {
        setLoading(false);
      }
    };

    loadGraphicsData();
  }, []);

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
            Here's a showcase of my work in graphics design, promotional materials, and marketing visuals
            for various clients and brands.
          </p>
          {error && <p className="text-destructive mt-2">{error}</p>}
          
          {/* Show data source information */}
          <p className="text-sm text-muted-foreground mb-4">
            Currently showing: {dataSource === 'database' ? 'Database' : 'Local'} data
          </p>
          
          {/* Show import button to seed the database */}
          {dataSource === 'local' && (
            <div className="mt-4 mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                No graphics found in database. Import graphics data:
              </p>
              <ImportGraphicsButton />
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <Tabs defaultValue="xclusive" className="w-full mb-8">
            <TabsList className="mx-auto flex justify-center flex-wrap">
              <TabsTrigger value="xclusive" className="text-sm md:text-base">Xclusive Vision</TabsTrigger>
              <TabsTrigger value="travels" className="text-sm md:text-base">Krishna Travels</TabsTrigger>
              <TabsTrigger value="ayurveda" className="text-sm md:text-base">Hilarius Ayurveda</TabsTrigger>
              <TabsTrigger value="ipcs" className="text-sm md:text-base">IPCS Global</TabsTrigger>
            </TabsList>
            
            <TabsContent value="xclusive" className="mt-8">
              <TabContent 
                title="Xclusive Vision"
                description="Visa and immigration consultancy graphics created for Xclusive Vision, featuring visa services, 
                success stories, and international travel opportunities."
                items={xclusiveData}
                onViewFull={handleViewFull}
              />
            </TabsContent>
            
            <TabsContent value="travels" className="mt-8">
              <TabContent 
                title="Krishna Travels"
                description="Marketing and promotional graphics created for Krishna Travels, featuring flight deals, 
                destination highlights, and business-to-business travel agent services."
                items={travelsData}
                onViewFull={handleViewFull}
              />
            </TabsContent>
            
            <TabsContent value="ayurveda" className="mt-8">
              <TabContent 
                title="Hilarius Ayurveda"
                description="Promotional graphics and packaging designs created for Hilarius Ayurveda's Triphala Churna product line.
                These designs showcase product benefits, ingredients, and usage instructions."
                items={ayurvedaData}
                onViewFull={handleViewFull}
              />
            </TabsContent>
            
            <TabsContent value="ipcs" className="mt-8">
              <TabContent 
                title="IPCS Global"
                description="Promotional materials designed for IPCS Global's educational programs and courses,
                focusing on technology training and digital marketing."
                items={ipcsData}
                onViewFull={handleViewFull}
              />
            </TabsContent>
          </Tabs>
        )}

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
      <FullScreenViewer selectedImage={selectedImage} onClose={closeFullScreen} />
    </section>
  );
};

export default GraphicsSection;
