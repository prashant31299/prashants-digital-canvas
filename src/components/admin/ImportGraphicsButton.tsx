
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { importGraphicsToSupabase } from "@/scripts/importGraphicsToSupabase";

const ImportGraphicsButton = () => {
  const [importing, setImporting] = useState(false);
  const { toast } = useToast();

  const handleImport = async () => {
    if (importing) return;
    
    setImporting(true);
    try {
      const result = await importGraphicsToSupabase();
      toast({
        title: "Import Successful",
        description: `Successfully imported ${result.count} graphics to the database.`,
      });
    } catch (error) {
      console.error("Import error:", error);
      toast({
        variant: "destructive",
        title: "Import Failed",
        description: "There was an error importing the graphics data. See console for details.",
      });
    } finally {
      setImporting(false);
    }
  };

  return (
    <Button 
      onClick={handleImport} 
      disabled={importing}
      variant="outline"
    >
      {importing ? "Importing..." : "Import Graphics to Database"}
    </Button>
  );
};

export default ImportGraphicsButton;
