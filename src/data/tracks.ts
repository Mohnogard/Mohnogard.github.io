import type { Track } from "./projects";

export interface TrackInfo {
  id: Track;
  label: string; // short name used on the hero cards and in the navbar
  title: string; // section heading
  blurb: string; // one line on the hero card
  intro: string; // paragraph under the section heading
  skills: string[];
  image?: string; // hero card picture; the AI card draws its own illustration
}

// Order here is the order on the page: software-facing work first.
export const tracks: TrackInfo[] = [
  {
    id: "ai",
    label: "Applied AI",
    title: "Applied AI",
    blurb: "LLM applications, retrieval-augmented generation, computer vision",
    intro:
      "Building applications where a language model does real work — grounded in retrieved documents, with citations, and honest about what it doesn't know. Plus smaller computer-vision and search-algorithm builds in Python.",
    skills: [
      "Python",
      "RAG",
      "LLM integration (Claude API)",
      "Embeddings & chunking",
      "pgvector",
      "Prompt engineering",
      "FastAPI",
      "OpenCV",
      "MediaPipe",
      "NumPy / Pandas",
    ],
  },
  {
    id: "software",
    label: "Software Engineering",
    title: "Software Engineering",
    blurb: "Backend and full-stack development in C#/.NET and Python",
    intro:
      "Database-driven web applications built end to end — layered architecture with services behind interfaces, authentication, payments and admin back offices — from a .NET internship at Orange Jordan and two complete e-commerce platforms.",
    skills: [
      "C#",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "SQL Server",
      "PostgreSQL",
      "REST APIs",
      "ASP.NET Core Identity / OAuth",
      "Stripe",
      "JavaScript",
      "Docker",
      "Git / GitHub",
    ],
    image: "/images/nexusgear/admin.jpg",
  },
  {
    id: "mechatronics",
    label: "Mechatronics",
    title: "Mechatronics",
    blurb: "Robotics, embedded systems and optics — in industry in Germany",
    intro:
      "Where I started: three years in Germany writing software that talks to hardware — a ROS-driven test vehicle at Pilz, an optical testing system at Bosch, and control electronics for an optical CPU at a Munich startup.",
    skills: [
      "Python & C++ (embedded)",
      "ROS",
      "Linux",
      "Raspberry Pi",
      "Arduino",
      "SPI",
      "CANopen",
      "KiCad (PCB design)",
      "CAD",
    ],
    image: "/images/pilz/bench.jpg",
  },
];
