import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "2-Storey Family Residence",
    category: "Residential",

    description:
      "A modern two-storey residence designed with spacious living areas, premium finishes, and energy-efficient construction for a growing family.",

    location: "Iloilo City",

    sqm: "320 sqm",

    duration: "8 Months",

    status: "Completed",

    coverImage: "/images/projects/project1/cover.jpg",

    images: [
      "/images/projects/project1/1.jpg",
      "/images/projects/project1/2.jpg",
      "/images/projects/project1/3.jpg",
      "/images/projects/project1/4.jpg",
    ],
  },

  {
    id: 2,
    title: "Commercial Office Building",
    category: "Commercial",

    description:
      "A contemporary office building designed to maximize workspace efficiency while maintaining an elegant architectural appearance.",

    location: "Bacolod City",

    sqm: "1,250 sqm",

    duration: "14 Months",

    status: "Completed",

    coverImage: "/images/projects/project2/cover.jpg",

    images: [
      "/images/projects/project2/1.jpg",
      "/images/projects/project2/2.jpg",
      "/images/projects/project2/3.jpg",
    ],
  },

  {
    id: 3,
    title: "Warehouse Facility",
    category: "Industrial",

    description:
      "Large-scale warehouse facility built with durable materials for long-term industrial operations and logistics.",

    location: "Roxas City",

    sqm: "2,500 sqm",

    duration: "12 Months",

    status: "Ongoing",

    coverImage: "/images/projects/project3/cover.jpg",

    images: [
      "/images/projects/project3/1.jpg",
      "/images/projects/project3/2.jpg",
      "/images/projects/project3/3.jpg",
    ],
  },
];