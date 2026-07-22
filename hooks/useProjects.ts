"use client";

import {
  useEffect,
  useMemo,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";


import { Project, ProjectStatus } from "@/types/project";
import { uploadImage } from "@/lib/uploadImage";

import {
  getAdminProjects,
  createProject,
  updateProject,
  deleteProject,
} from "@/lib/adminProjects";


interface FormData {
  title: string;
  category: string;
  status: ProjectStatus;
  location: string;
  sqm: string;
  duration: string;
  description: string;
}

export default function useProjects() {
  const [projects, setProjects] =
    useState<Project[]>([]);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [
    selectedCategoryFilter,
    setSelectedCategoryFilter,
  ] = useState("All");

  const [
    selectedStatusFilter,
    setSelectedStatusFilter,
  ] = useState("All");

  const [
    editingProjectId,
    setEditingProjectId,
  ] = useState<number | null>(null);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [success, setSuccess] =
    useState<string | null>(null);

    const [deleteModalOpen, setDeleteModalOpen] =
  useState(false);

const [projectToDelete, setProjectToDelete] =
  useState<Project | null>(null);

  const [previews, setPreviews] =
    useState<string[]>([]);

    const [imageFiles, setImageFiles] =
useState<File[]>([]);

  const [formData, setFormData] =
    useState<FormData>({
      title: "",
      category: "Residential",
      status: "Ongoing",
      location: "",
      sqm: "",
      duration: "",
      description: "",
    });

      useEffect(() => {
        async function loadProjects() {
          const data = await getAdminProjects();
          setProjects(data);
        }

        loadProjects();
      }, []);

      const refreshProjects = async () => {
  const data = await getAdminProjects();
  setProjects(data);
};

  const handleInputChange = (
    e: ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleImageChange = (
  e: ChangeEvent<HTMLInputElement>
) => {

  if (!e.target.files) return;

  const files = Array.from(e.target.files);

  setImageFiles(prev => [...prev, ...files]);

  files.forEach(file => {

    const reader = new FileReader();

    reader.onloadend = () => {

      if (typeof reader.result === "string") {

        setPreviews(prev => [
          ...prev,
          reader.result as string
        ]);

      }

    };

    reader.readAsDataURL(file);

  });

};

const removeImage = (index: number) => {
  setPreviews((prev) =>
    prev.filter((_, i) => i !== index)
  );

  setImageFiles((prev) =>
    prev.filter((_, i) => i !== index)
  );
};

  const cancelEdit = () => {
    setEditingProjectId(null);

    setFormData({
      title: "",
      category: "Residential",
      status: "Ongoing",
      location: "",
      sqm: "",
      duration: "",
      description: "",
    });

    setPreviews([]);
    setImageFiles([]);
  };
    const startEdit = (project: Project) => {
    setEditingProjectId(project.id);

    setFormData({
      title: project.title,
      category: project.category,
      status: project.status,
      location: project.location,
      sqm: project.sqm,
      duration: project.duration,
      description: project.description,
    });

    setPreviews(project.images ?? [project.coverImage]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const handleSubmit = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (previews.length === 0) {
    alert("Please upload at least one image.");
    return;
  }

  setIsSubmitting(true);

  try {
    const uploadedUrls: string[] = [];

for (const file of imageFiles) {
  const url = await uploadImage(file);
  uploadedUrls.push(url);
}

const images =
  uploadedUrls.length > 0
    ? uploadedUrls
    : previews;

const project: Project = {
  id: editingProjectId ?? 0,
  title: formData.title,
  category: formData.category,
  status: formData.status,
  location: formData.location,
  sqm: formData.sqm,
  duration: formData.duration,
  description: formData.description,
  coverImage: images[0],
  images,
};

if (editingProjectId !== null) {
  await updateProject(project);
  setSuccess("Project updated successfully.");
} else {
  await createProject(project);
  setSuccess("Project created successfully.");
}

await refreshProjects();

cancelEdit();

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }

  setIsSubmitting(false);

  setTimeout(() => {
    setSuccess(null);
  }, 3000);
};

// ==============================
// Open Delete Modal
// ==============================

const handleDelete = (id: number) => {
  const project = projects.find((p) => p.id === id);

  if (!project) return;

  setProjectToDelete(project);
  setDeleteModalOpen(true);
};

// ==============================
// Confirm Delete
// ==============================

const confirmDelete = async () => {
  if (!projectToDelete) return;

  try {
    await deleteProject(projectToDelete.id);

    await refreshProjects();

    if (editingProjectId === projectToDelete.id) {
      cancelEdit();
    }

    setSuccess("Project deleted successfully.");

  } catch (error) {
    console.error(error);
    alert("Failed to delete project.");
  }

  setDeleteModalOpen(false);
  setProjectToDelete(null);

  setTimeout(() => {
    setSuccess(null);
  }, 3000);
};
    const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.location
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.id.toString() === searchQuery.trim();

      const matchesCategory =
        selectedCategoryFilter === "All" ||
        project.category === selectedCategoryFilter;

      const matchesStatus =
        selectedStatusFilter === "All" ||
        project.status === selectedStatusFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [
    projects,
    searchQuery,
    selectedCategoryFilter,
    selectedStatusFilter,
  ]);

 return {
  // DATA
  projects,
  filteredProjects,
  formData,
  previews,
  success,
  isSubmitting,
  editingProjectId,

  // DELETE MODAL
  deleteModalOpen,
  setDeleteModalOpen,
  projectToDelete,

  // SEARCH
  searchQuery,
  selectedCategoryFilter,
  selectedStatusFilter,

  // SETTERS
  setSearchQuery,
  setSelectedCategoryFilter,
  setSelectedStatusFilter,

  // ACTIONS
  handleInputChange,
  handleImageChange,
  removeImage,
  handleSubmit,
  handleDelete,
  confirmDelete,
  startEdit,
  cancelEdit,
};
}