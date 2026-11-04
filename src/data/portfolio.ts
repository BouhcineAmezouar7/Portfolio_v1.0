export const profile = {
  name: "Bouhcine Amezouar",
  firstName: "Bouhcine",
  lastName: "Amezouar",
  role: "Software Engineering Student & Full-Stack Developer",
  birthDate: "2003-09-02",
  birthDateLabel: "02 September 2003",
  age: "23",
  email: "amezouarbouhcine@gmail.com",
  phone: "+212 675 853 859",
  phoneHref: "tel:+212675853859",
  location: "Casablanca, Morocco",
  school: "1337 Coding School",
  schoolPeriod: "2025 — Present",
  ofpptPeriod: "2021 — 2023",
  graduationYear: "2024",
  baccalaureateYear: "2021",
  resumePath: "/resume/Bouhcine_Amezouar.pdf",
  portfolioUrl: "https://amezouarbouhcine.vercel.app/",
} as const;

export const portfolioYear = "2026";

export const mainNavigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const resumeNavigationLink = {
  name: "Resume",
  href: "/resume",
} as const;

export const mobileNavigationLinks = [
  ...mainNavigationLinks,
  resumeNavigationLink,
] as const;

export const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/BouhcineAmezouar7",
    external: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bouhcine-amezouar-18ba65402",
    external: true,
  },
  {
    id: "email",
    name: "Email",
    href: `mailto:${profile.email}`,
    external: false,
  },
] as const;

export const projects = [
  {
    id: 1,
    slug: "maou3idy",
    number: "01",
    title: "Maou3idy",
    category: "Full Stack",
    image: "/projects/maou3idy_app.png",
    year: "1337",
    description:
      "A healthcare appointment platform built by a five-developer team for ft_transcendence. I owned the booking and scheduling workflows across the Next.js frontend and NestJS services.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "RabbitMQ",
    ],
    highlights: [
      "Appointment booking, scheduling, cancellation, and completion workflows",
      "Doctor availability and appointment-slot management",
      "Doctor dashboard and patient booking interfaces with Next.js",
      "NestJS service integration in a PostgreSQL and Prisma microservices architecture",
    ],
    type: "Full Stack / Team",
    featured: true,
  },
  {
    id: 2,
    slug: "atlas-team-manager",
    number: "02",
    title: "Atlas Team Manager",
    category: "Full Stack",
    image: "/projects/team-project-management-platform.png",
    year: "Completed",
    description:
      "A full-stack team-management platform for organizing workspaces, projects, members, and tasks, with secure authentication and role-based access.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "Better Auth",
    ],
    highlights: [
      "Workspace, member and project organization",
      "Task-board workflows for team collaboration",
      "Email verification and password recovery",
      "Authentication and role-based access with Better Auth",
    ],
    type: "Personal Project",
    featured: true,
  },
  {
    id: 3,
    slug: "webserv",
    number: "03",
    title: "Webserv",
    category: "Systems",
    image: "/projects/webserve_app.png",
    diagram: "/projects/webserve.png",
    year: "1337",
    description:
      "An HTTP server built in C++ to explore sockets, request and response handling, networking, and client/server architecture.",
    tags: ["C++", "HTTP", "Networking", "Sockets", "Linux"],
    highlights: [
      "Socket-based client and server communication",
      "HTTP request parsing and response generation",
      "Server configuration and routing behavior",
      "Networking fundamentals beneath web frameworks",
    ],
    type: "Systems / Networking",
    featured: true,
  },
  {
    id: 4,
    slug: "inception",
    number: "04",
    title: "Inception",
    category: "Infrastructure",
    image: "/projects/inception_app.png",
    year: "1337",
    description:
      "A system-administration project that builds a multi-service environment with containers, images, volumes, networks and persistent data.",
    tags: ["Docker", "Docker Compose", "Linux", "Networks"],
    highlights: [
      "Multi-service containerized environment",
      "Custom images and service orchestration",
      "Persistent data with volumes",
      "Isolated service communication through Docker networks",
    ],
    type: "Infrastructure",
    featured: false,
  },
  {
    id: 5,
    slug: "e-commerce-frontend",
    number: "05",
    title: "E-Commerce Frontend",
    category: "Frontend",
    image: "/projects/shop_app.png",
    year: "Practice project",
    description:
      "A frontend-focused storefront built to practice reusable components, responsive layouts, product presentation and navigation.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Reusable interface components",
      "Responsive storefront layouts",
      "Product-focused presentation",
      "Clear navigation across screen sizes",
    ],
    type: "Frontend",
    featured: false,
  },
] as const;

export const projectFilters = [
  "All",
  "Full Stack",
  "Systems",
  "Infrastructure",
  "Frontend",
] as const;

export const featuredProjects = projects.filter((project) => project.featured);

export const experiences = [
  {
    id: "1337",
    number: "01",
    title: "Software Engineering Student",
    company: "1337 Coding School",
    period: "2025 — Present",
    description:
      "Developing programming, problem-solving, and software-engineering skills through project-based work in systems, networking, infrastructure, and full-stack development.",
    achievements: [
      "Built Webserv in C++ and the containerized Inception infrastructure",
      "Delivered Maou3idy with a five-developer ft_transcendence team",
      "Owned booking and scheduling workflows across Next.js and NestJS",
    ],
    status: "Current",
  },
  {
    id: "ofppt",
    number: "02",
    title: "Web Full-Stack Development",
    company: "OFPPT — CFPM Sidi Moumen",
    period: "2021 — 2023",
    description:
      "Built my professional foundation in frontend development, backend development, databases and complete web application architecture in Casablanca.",
    achievements: [
      "Laravel + React.js",
      "JavaScript, HTML and CSS",
      "MySQL and application architecture",
    ],
    status: "Foundation",
  },
  {
    id: "dm-decore",
    number: "03",
    title: "Full-Stack Developer — PFE Intern",
    company: "DM-Decore",
    period: "May 2023 — June 2023",
    description:
      "Collaborated with a team on an e-commerce application using Laravel and React.js, building interfaces and integrating them with backend APIs and database operations.",
    achievements: [
      "Laravel + React.js",
      "REST API integration",
      "Collaborative full-stack delivery",
    ],
    status: "Previous",
  },
  {
    id: "netone",
    number: "04",
    title: "Web Development / Database Intern",
    company: "NetoneMaroc",
    period: "July 2023 — September 2023",
    description:
      "Managed and organized application data and designed frontend interfaces for viewing and interacting with structured database information.",
    achievements: [
      "Database management",
      "Frontend interface design",
      "Data organization",
    ],
    status: "Previous",
  },
] as const;

export const resumeExperiences = experiences.filter(
  (experience) => experience.id !== "ofppt",
);
