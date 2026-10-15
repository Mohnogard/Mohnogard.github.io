import type { Track } from "./projects";

export interface Role {
  slug: string;
  track: Track;
  company: string;
  title: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
  images?: string[];
}

export const roles: Role[] = [
  {
    slug: "orange",
    track: "software",
    company: "Orange Jordan",
    title: "Full-Stack .NET Developer Intern",
    location: "Amman, Jordan",
    period: "02/2026 – 06/2026",
    summary:
      "Built database-driven web applications end to end, from data model to UI, working in a team through Git and GitHub.",
    highlights: [
      "Layered architecture: business logic in services behind interfaces, data access through repositories, wired with dependency injection",
      "Role-based authentication with ASP.NET Core Identity, plus Stripe payments and Google/Facebook sign-in",
      "Team collaboration with branches and pull requests",
    ],
    tech: ["C#", "ASP.NET Core MVC", "EF Core", "SQL Server", "Git"],
  },
  {
    slug: "akhetonics",
    track: "mechatronics",
    company: "Akhetonics GmbH",
    title: "Electronics Engineer",
    location: "Munich, Germany",
    period: "12/2024 – 07/2025",
    summary:
      "Photonics startup building an all-optical CPU. Wrote the software and electronics that drive and test its precision optical systems.",
    highlights: [
      "Embedded control software in Python and C++ for Raspberry Pi and Arduino, including SPI communication with the optical CPU",
      "Designed control boards in KiCad, then brought them up and debugged them across software and hardware",
      "Python tooling to control and test precision optical systems",
    ],
    tech: ["Python", "C++", "Raspberry Pi", "Arduino", "SPI", "KiCad"],
    images: ["/images/akhetonics/board-test.jpg", "/images/akhetonics/kicad.jpg"],
  },
  {
    slug: "bosch",
    track: "mechatronics",
    company: "Robert Bosch GmbH",
    title: "Bachelor Thesis — Polychromatic Flying Spot Projector",
    location: "Stuttgart, Germany",
    period: "10/2023 – 02/2024",
    summary:
      "Designed and led development of a polychromatic optical testing system for automated material characterization.",
    highlights: [
      "Python tools to process, visualize and validate optical measurement data, used to guide design decisions",
      "Characterized material behaviour (fluorescence, thermal) and used the data to optimize the system design",
      "Mechanical design of the optical assembly in CAD, from model to 3D-printed prototype",
    ],
    tech: ["Python", "NumPy", "Matplotlib", "CAD", "Optics"],
    images: [
      "/images/bosch/projection.jpg",
      "/images/bosch/spectra.jpg",
      "/images/bosch/cad.jpg",
      "/images/bosch/prototype.jpg",
    ],
  },
  {
    slug: "pilz",
    track: "mechatronics",
    company: "Pilz GmbH & Co. KG",
    title: "Robotics Intern",
    location: "Stuttgart, Germany",
    period: "06/2023 – 09/2023",
    summary:
      "Led development of an autonomous guided vehicle (AGV) used for industrial safety testing.",
    highlights: [
      "Autonomous control software in Python with ROS on Linux",
      "Integrated motors, motor controllers, sensors and a Raspberry Pi into one working vehicle",
      "Implemented CANopen communication and remote-control validation for repeatable safety test runs",
    ],
    tech: ["Python", "ROS", "Linux", "CANopen", "Raspberry Pi"],
    images: ["/images/pilz/bench.jpg", "/images/pilz/teleop.jpg", "/images/pilz/can-hat.jpg"],
  },
];

export const education = {
  degree: "BSc Mechatronics Engineering",
  school: "German Jordanian University (GJU)",
  period: "2017 – 2024",
  note: "Exchange at THWS Würzburg-Schweinfurt, Germany (2022 – 2024)",
};
