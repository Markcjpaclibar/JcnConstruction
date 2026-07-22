"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import { Project } from "@/types/project";
import ProjectGallery from "./ProjectGallery";
import ProjectInfo from "./ProjectInfo";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Build gallery (Cover + Images)
  const gallery = useMemo(() => {
    if (!project) return [];
    return [project.coverImage, ...project.images];
  }, [project]);

  // Reset gallery when project changes
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  // Lock body scroll
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          setCurrentImage((prev) =>
            prev === gallery.length - 1 ? 0 : prev + 1
          );
          break;

        case "ArrowLeft":
          setCurrentImage((prev) =>
            prev === 0 ? gallery.length - 1 : prev - 1
          );
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, gallery.length, onClose]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === gallery.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] overflow-y-auto bg-black/80 p-3 backdrop-blur-md sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative mx-auto my-6 w-full max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300 sm:my-10 sm:rounded-3xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#F4C430] hover:text-[#0A1F44] sm:right-6 sm:top-6"
        >
          <X size={22} />
        </button>

        {/* Gallery */}
        <ProjectGallery
          images={gallery}
          currentImage={currentImage}
          onNext={nextImage}
          onPrevious={previousImage}
          onSelectImage={setCurrentImage}
        />

        {/* Information */}
        <ProjectInfo project={project} />
      </div>
    </div>
  );
}