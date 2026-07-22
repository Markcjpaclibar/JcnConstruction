import { supabase } from "./supabase";
import { deleteImage } from "@/lib/deleteImages";
import { Project } from "@/types/project";


// ===============================
// GET PROJECTS
// ===============================

export async function getAdminProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(`
      *,
      project_images(
        image_url,
        display_order
      )
    `)
    .order("display_order", {
      ascending: true,
    });

  if (error) {
    console.error(error);
    return [];
  }

  return data.map((project: any) => ({
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

    images:
      project.project_images
        ?.sort(
          (a: any, b: any) =>
            a.display_order - b.display_order
        )
        .map((img: any) => img.image_url) ?? [],
  }));
}

// ===============================
// CREATE PROJECT
// ===============================

export async function createProject(project: Project) {
  const { data, error } = await supabase
    .from("projects")
    .insert({
      title: project.title,
      category: project.category,
      description: project.description,
      location: project.location,
      sqm: project.sqm,
      duration: project.duration,
      status: project.status,
      cover_image: project.coverImage,
    })
    .select()
    .single();

  if (error) throw error;

  if (project.images.length > 0) {
    await supabase.from("project_images").insert(
      project.images.map((image, index) => ({
        project_id: data.id,
        image_url: image,
        display_order: index,
      }))
    );
  }

  return data;
}

// ===============================
// UPDATE PROJECT
// ===============================

export async function updateProject(project: Project) {
  const { error } = await supabase
    .from("projects")
    .update({
      title: project.title,
      category: project.category,
      description: project.description,
      location: project.location,
      sqm: project.sqm,
      duration: project.duration,
      status: project.status,
      cover_image: project.coverImage,
    })
    .eq("id", project.id);

  if (error) throw error;

  await supabase
    .from("project_images")
    .delete()
    .eq("project_id", project.id);

  if (project.images.length > 0) {
    await supabase.from("project_images").insert(
      project.images.map((image, index) => ({
        project_id: project.id,
        image_url: image,
        display_order: index,
      }))
    );
  }
}

// ===============================
// DELETE PROJECT
// ===============================

export async function deleteProject(id: number) {

  // Get all image URLs first
  const { data: images, error: imageError } = await supabase
    .from("project_images")
    .select("image_url")
    .eq("project_id", id);

  if (imageError) throw imageError;

  // Delete every image from Storage
  if (images) {
    for (const image of images) {
      await deleteImage(image.image_url);
      console.log("DB image_url:", image.image_url);
    }
  }

  // Delete image records
  const { error: projectImagesError } = await supabase
    .from("project_images")
    .delete()
    .eq("project_id", id);

  if (projectImagesError) throw projectImagesError;

  // Delete project
  const { error: projectError } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (projectError) throw projectError;
}