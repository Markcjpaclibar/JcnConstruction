"use client";

import { Bebas_Neue } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

import DashboardStats from "@/components/admin/dashboard/Dashboardstats";
import RecentActivity from "@/components/admin/dashboard/RecentActivity";

import ProjectForm from "@/components/admin/forms/ProjectForm";
import ImageUploader from "@/components/admin/forms/ImageUploader";

import SearchFilters from "@/components/admin/projects/SearchFilters";
import ProjectList from "@/components/admin/projects/ProjectList";

import DeleteModal from "@/components/admin/ui/DeleteModal";
import SuccessAlert from "@/components/admin/ui/SuccessAlert";

import useProjects from "@/hooks/useProjects";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
 const categories = [
  "Residential",
  "Commercial",
  "Industrial",
  "Institutional",
  "Corporate",
  "Religious",
  "Land Development",
  "Infrastructure",
];

const statuses = [
  "Conceptual",
  "Ongoing",
  "Completed",
];

  const {
    projects,
    filteredProjects,
    formData,
    previews,
    success,
    isSubmitting,
    editingProjectId,

    searchQuery,
    selectedCategoryFilter,
    selectedStatusFilter,

    deleteModalOpen,
    setDeleteModalOpen,
    projectToDelete,
    confirmDelete,

    setSearchQuery,
    setSelectedCategoryFilter,
    setSelectedStatusFilter,

    handleInputChange,
    handleImageChange,
    removeImage,
    handleSubmit,
    handleDelete,
    startEdit,
    cancelEdit,
  } = useProjects();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-16">

        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          {/* Header */}

          <div className="mb-10 text-center">
            <h1
              className={`${bebas.className} text-5xl tracking-wide text-[#0A1F44]`}
            >
              ADMIN DASHBOARD
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your construction projects, upload new work, and organize your portfolio.
            </p>
          </div>

          {/* Success Alert */}

          {success && (
            <SuccessAlert message={success} />
          )}

          {/* Dashboard Stats */}

<DashboardStats
  total={projects.length}
  conceptual={
    projects.filter(
      (p) => p.status === "Conceptual"
    ).length
  }
  ongoing={
    projects.filter(
      (p) => p.status === "Ongoing"
    ).length
  }
  completed={
    projects.filter(
      (p) => p.status === "Completed"
    ).length
  }
/>

          <div className="mb-10">
            <RecentActivity
              projects={projects}
            />
          </div>

          {/* Project Form */}

          <ProjectForm
            formData={formData}
            categories={categories}
            statuses={statuses}
            editingProjectId={editingProjectId}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            onInputChange={handleInputChange}
            onCancel={cancelEdit}
          >
            <ImageUploader
              previews={previews}
              onImageChange={handleImageChange}
              onRemoveImage={removeImage}
            />
          </ProjectForm>

          {/* Project List */}

          <section className="mt-16">

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <h2
                className={`${bebas.className} text-3xl tracking-wide text-[#0A1F44]`}
              >
                PROJECTS ({filteredProjects.length})
              </h2>

              <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-700">
                Total: {projects.length}
              </span>

            </div>

            <SearchFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategoryFilter={selectedCategoryFilter}
              setSelectedCategoryFilter={setSelectedCategoryFilter}
              selectedStatusFilter={selectedStatusFilter}
              setSelectedStatusFilter={setSelectedStatusFilter}
              categories={categories}
              statuses={statuses}
            />

            <div className="mt-6">

              <ProjectList
                projects={filteredProjects}
                editingProjectId={editingProjectId}
                onEdit={startEdit}
                onDelete={handleDelete}
              />

            </div>

          </section>

        </div>

        {/* ==============================
            DELETE MODAL
        ============================== */}

        <DeleteModal
          open={deleteModalOpen}
          project={projectToDelete}
          onCancel={() => {
            setDeleteModalOpen(false);
          }}
          onConfirm={confirmDelete}
        />

      </main>
    </>
  );
}