export type ProjectStatus =
  | "Conceptual"
  | "Ongoing"
  | "Completed";

export interface Project {
  id: number;

  title: string;
  category: string;

  description: string;

  location: string;
  sqm: string;
  duration: string;

  status: ProjectStatus;

  coverImage: string;

  images: string[];

}