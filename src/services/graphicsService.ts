
import { supabase } from "@/integrations/supabase/client";
import { GraphicsItem } from "@/components/graphics/GraphicsCarousel";

// Function to fetch graphics data from Supabase by category
export async function fetchGraphicsByCategory(category: string): Promise<GraphicsItem[]> {
  console.log(`Fetching graphics for category: ${category}`);
  
  const { data, error } = await supabase
    .from('graphics_images')
    .select('*')
    .eq('category', category);
  
  if (error) {
    console.error("Error fetching graphics:", error);
    return [];
  }

  console.log(`Retrieved ${data?.length || 0} items for category ${category}:`, data);

  // Map the database items to the GraphicsItem format
  return data.map((item) => ({
    id: parseInt(item.id.toString().slice(0, 8), 16) % 10000, // Convert UUID to a numeric ID
    title: item.title,
    description: item.description,
    image: item.image_path,
    tags: item.tags || [],
  }));
}

// Function to fetch all categories
export async function fetchCategories(): Promise<string[]> {
  const { data, error } = await supabase
    .from('graphics_images')
    .select('category')
    .order('category');
  
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }

  // Get unique categories
  const uniqueCategories = [...new Set(data.map(item => item.category))];
  return uniqueCategories;
}
