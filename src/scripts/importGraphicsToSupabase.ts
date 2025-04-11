
import { supabase } from "@/integrations/supabase/client";
import { ipcsItems, ayurvedaItems, travelsItems, xclusiveItems } from "../components/graphics/graphicsData";

/**
 * This is a utility script to import the existing graphics data into Supabase.
 * It's meant to be run once to seed the database with the initial data.
 * 
 * You can run this in the browser console once you're logged in:
 * 1. Copy this entire function
 * 2. Open browser console on your website
 * 3. Paste and call the function: importGraphicsToSupabase()
 */
export async function importGraphicsToSupabase() {
  console.log("Starting import of graphics data to Supabase...");
  
  // Helper function to insert items
  const insertItems = async (items: any[], category: string) => {
    console.log(`Importing ${items.length} items for category ${category}...`);
    
    for (const item of items) {
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
      }
    }
  };
  
  try {
    // Import each category
    await insertItems(xclusiveItems, 'xclusive');
    await insertItems(travelsItems, 'travels');
    await insertItems(ayurvedaItems, 'ayurveda');
    await insertItems(ipcsItems, 'ipcs');
    
    console.log("Import completed!");
  } catch (error) {
    console.error("Import failed:", error);
  }
}

// To use this script, call importGraphicsToSupabase() in the browser console
