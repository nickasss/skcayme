// src/data/projects.ts

export type Project = {
  id: number;
  title: string;
  src: string;
  description: string;
  client: string;
  button: string;
};

export const allProjects: Project[] = [
  // --- Your Original Projects ---
  {
    id: 1,
    title: "Modern Residential Home",
    src: "/projectImages/image1.jpg",
    description: "A stunning example of modern architecture that blends seamlessly with its natural surroundings, featuring open-plan living spaces and sustainable materials.",
    client: "The Smith Family",
    button: "View Project",
  },
  {
    id: 2,
    title: "Urban Commercial Complex",
    src: "/projectImages/image2.jpg",
    description: "This multi-use complex revitalized the downtown area, combining retail, office, and public spaces with a bold, contemporary design.",
    client: "City Development Corp.",
    button: "View Project",
  },
  {
    id: 3,
    title: "Sustainable Community Hub",
    src: "/images/project-3.jpg",
    description: "An eco-friendly hub designed to bring the community together, featuring a green roof, solar panels, and locally sourced materials.",
    client: "GreenSpace Initiative",
    button: "View Project",
  },
  {
    id: 4,
    title: "Minimalist Interior Design",
    src: "/images/project-4.jpg",
    description: "Focused on clean lines and a neutral palette, this interior design project creates a serene and functional living space.",
    client: "Jane Doe",
    button: "View Project",
  },

  // --- New Expanded Projects ---
  {
    id: 5,
    title: "The Coastal Serenity Resort",
    src: "/images/project-5.jpg",
    description: "A luxury boutique hotel offering guests an escape with panoramic ocean views, private balconies, and an infinity pool that merges with the horizon.",
    client: "Horizon Hospitality Group",
    button: "View Project",
  },
  {
    id: 6,
    title: "Innovatech Corporate Campus",
    src: "/images/project-6.jpg",
    description: "A state-of-the-art corporate headquarters designed to foster collaboration, featuring flexible workspaces, green rooftops, and smart building technology.",
    client: "Innovatech Solutions Inc.",
    button: "View Project",
  },
  {
    id: 7,
    title: "The Prism Art Gallery",
    src: "/images/project-7.jpg",
    description: "A contemporary art gallery where the architecture itself is a sculpture, using natural light and dynamic spaces to create a transformative viewing experience.",
    client: "The Astor Foundation for Arts",
    button: "View Project",
  },
  {
    id: 8,
    title: "Grand Majestic Theater Restoration",
    src: "/images/project-8.jpg",
    description: "A meticulous restoration of a 1920s landmark, preserving its historic Art Deco details while integrating modern acoustics and amenities for a new era.",
    client: "City Heritage Preservation Society",
    button: "View Project",
  },
  {
    id: 9,
    title: "Riverfront Urban Oasis Park",
    src: "/images/project-9.jpg",
    description: "Transforming a derelict industrial waterfront into a vibrant public park with native plantings, interactive features, and a promenade connecting the city to its river.",
    client: "Metropolis Parks Department",
    button: "View Project",
  },
  {
    id: 10,
    title: "Élan Luxury Flagship Store",
    src: "/images/project-10.jpg",
    description: "A flagship retail experience for a high-fashion brand, using minimalist design and bespoke materials to create an immersive and exclusive shopping environment.",
    client: "Élan Couture",
    button: "View Project",
  },
];