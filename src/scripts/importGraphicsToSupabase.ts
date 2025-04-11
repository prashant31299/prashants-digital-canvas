
import { supabase } from "@/integrations/supabase/client";
import { ipcsItems, ayurvedaItems, travelsItems, xclusiveItems } from "../components/graphics/graphicsData";

/**
 * This is a utility script to import the existing graphics data into Supabase.
 * It's meant to be run once to seed the database with the initial data.
 */
export async function importGraphicsToSupabase() {
  console.log("Starting import of graphics data to Supabase...");
  
  // Helper function to insert items
  const insertItems = async (items: any[], category: string) => {
    console.log(`Importing ${items.length} items for category ${category}...`);
    
    let importedCount = 0;
    
    for (const item of items) {
      // Check if the item already exists to prevent duplicates
      const { data: existing } = await supabase
        .from('graphics_images')
        .select('id')
        .eq('title', item.title)
        .eq('category', category);
        
      if (existing && existing.length > 0) {
        console.log(`Skipping duplicate: ${item.title}`);
        continue;
      }
      
      // Format the data for Supabase
      const graphicsItem = {
        title: item.title,
        description: item.description,
        category: category,
        image_path: item.image,
        tags: item.tags
      };
      
      const { data, error } = await supabase
        .from('graphics_images')
        .insert(graphicsItem);
      
      if (error) {
        console.error(`Error importing item ${item.title}:`, error);
      } else {
        console.log(`Successfully imported: ${item.title}`);
        importedCount++;
      }
    }
    
    return importedCount;
  };
  
  try {
    // Import each category
    let count = 0;
    count += await insertItems(xclusiveItems, 'xclusive');
    count += await insertItems(travelsItems, 'travels');
    count += await insertItems(ayurvedaItems, 'ayurveda');
    count += await insertItems(ipcsItems, 'ipcs');
    
    console.log(`Import completed! Imported ${count} items.`);
    return { count };
  } catch (error) {
    console.error("Import failed:", error);
    throw error;
  }
}
