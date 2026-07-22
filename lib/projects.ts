import { supabase } from "./supabase";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_images (
        image_url,
        display_order
      )
    `)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Supabase Error:", error);
    return [];
  }

  return data.map((project) => ({
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.description,
    location: project.location,
    sqm: project.sqm,
    duration: project.duration,
    status: project.status,
    coverImage: project.cover_image,
    featured: project.featured,

    images: project.project_images
      ?.sort((a: any, b: any) => a.display_order - b.display_order)
      .map((image: any) => image.image_url) ?? [],
  }));   
}