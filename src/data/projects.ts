export type Track = "ai" | "software" | "mechatronics";

export interface Project {
  slug: string;
  track: Track;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  status?: string;
  github?: string;
  live?: string;
  featured: boolean;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "engimind",
    track: "ai",
    name: "EngiMind",
    tagline: "Retrieval-augmented Q&A for engineering datasheets",
    description:
      "An AI system that lets engineers upload technical datasheets (PDF/CSV) and ask questions, getting answers grounded in exact document citations — page number for PDFs, row number for CSVs — with an honest “not enough information” fallback instead of a hallucinated guess.",
    highlights: [
      "FastAPI backend with PostgreSQL + pgvector for similarity search — one database for both relational data and vectors",
      "Token-aware chunking measured with the embedding model's own tokenizer, after a 700-character split let 11 chunks silently exceed the 256-token limit on CJK-heavy pages",
      "Citation-grounded answers via the Claude API, with a dedicated whole-table chunk for CSVs so counting questions see every row",
      "Strict Pydantic request validation (extra=\"forbid\") and transactional re-ingestion so a failed upload can't corrupt existing data",
      "Dockerized Postgres via Compose for a reproducible local environment",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Claude API", "Docker", "Pydantic"],
    status: "In active development — ingestion pipeline complete, answer generation in progress (~55%)",
    github: "https://github.com/Mohnogard/engiMind",
    featured: true,
  },
  {
    slug: "pharmaskincare",
    track: "software",
    name: "PharmaSkincare",
    tagline: "Full-stack pharmaceutical skincare e-commerce platform",
    description:
      "A production-style ASP.NET Core storefront built around a Category → Subcategory → Product(size variant) model, so a single “product card” can expose multiple sizes/doses each with its own price, stock, and SKU.",
    highlights: [
      "Subcategory/variant architecture with size-type locking once products exist, enforced server-side in the admin flow",
      "ASP.NET Core Identity auth, Stripe payments via split card elements with 3D Secure, wishlist, reviews with moderation",
      "Admin dashboard for categories, subcategories, products, orders, shipments, and inventory",
      "EF Core with careful handling of multi-filtered Include/ThenInclude queries to avoid runtime exceptions",
    ],
    tech: ["ASP.NET Core", "C#", "EF Core", "SQL Server", "Identity", "Stripe", "Bootstrap"],
    github: "https://github.com/Mohnogard/PharmaSkincare",
    featured: true,
    images: [
      "/images/pharmaskincare/hero.jpg",
      "/images/pharmaskincare/auth.jpg",
      "/images/pharmaskincare/admin.jpg",
    ],
  },
  {
    slug: "nexusgear",
    track: "software",
    name: "NexusGear",
    tagline: "Dark-themed gaming gear e-commerce platform",
    description:
      "A full-featured gaming storefront with a dark purple/pink/gold aesthetic, built on ASP.NET Core with a complete admin back office — analytics dashboard, inventory, order and review moderation — alongside the customer-facing shop and checkout.",
    highlights: [
      "Stripe checkout with split Elements (card number/expiry/CVC), automatic 3DS handling, and Cash on Delivery",
      "Admin dashboard with Chart.js revenue, order, and category analytics",
      "AJAX cart with live stock-limit enforcement, slug-based product URLs, discount ribbons with strikethrough pricing",
      "Role-based areas pattern separating the admin back office from the public shop layout",
    ],
    tech: ["ASP.NET Core", "C#", "EF Core", "SQL Server", "Stripe", "Chart.js", "JavaScript"],
    github: "https://github.com/Mohnogard/EcommerceNexusGear",
    featured: true,
    images: [
      "/images/nexusgear/hero.jpg",
      "/images/nexusgear/shop.png",
      "/images/nexusgear/admin.jpg",
    ],
  },
];

export interface Experiment {
  slug: string;
  track: Track;
  name: string;
  description: string;
  tech: string[];
  images?: string[];
}

export const experiments: Experiment[] = [
  {
    slug: "hand-tracker",
    track: "ai",
    name: "Hand Tracker",
    description:
      "Real-time hand-landmark tracking via webcam — detects a hand with MediaPipe, overlays a tracked circle marker (toggle between wrist and index fingertip), with a live FPS counter.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    images: ["/images/experiments/handtracker.png"],
  },
  {
    slug: "maze-solver",
    track: "ai",
    name: "Maze Pathfinder",
    description:
      "Generates a random grid with a start and goal cell and obstacle walls, then searches for a path between them using a frontier/explored-set graph search — reports the path if one exists, or that none does.",
    tech: ["Python", "Search algorithms"],
    images: ["/images/experiments/maze1.png", "/images/experiments/maze2.png"],
  },
  {
    slug: "dino-bot",
    track: "mechatronics",
    name: "Chrome Dino Auto-Player",
    description:
      "A physical bot that plays the Chrome offline dinosaur game on its own — a light sensor taped to the screen spots incoming obstacles, and an Arduino drives a servo arm that presses the spacebar to jump.",
    tech: ["Arduino", "C++", "Sensors", "Servo control"],
    images: ["/images/experiments/dino.mp4"],
  },
];
