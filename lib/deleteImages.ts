import { supabase } from "./supabase";

export async function deleteImage(imageUrl: string) {

  console.log("Received imageUrl:", imageUrl);

  try {

    const url = new URL(imageUrl);

    console.log("Parsed URL:", url);

    const parts = url.pathname.split("/");

    console.log("Path parts:", parts);

    const bucketIndex = parts.findIndex(
      (part) => part === "project-images"
    );

    console.log("Bucket index:", bucketIndex);

    if (bucketIndex === -1) return;

    const filePath = parts
      .slice(bucketIndex + 1)
      .join("/");

    console.log("Deleting file:", filePath);

    const { data, error } = await supabase.storage
      .from("project-images")
      .remove([filePath]);

    console.log("Remove result:", data);

    if (error) {
      console.error("Storage remove error:", error);
      throw error;
    }

  } catch (error) {
    console.error("Delete image failed:", error);
  }
}