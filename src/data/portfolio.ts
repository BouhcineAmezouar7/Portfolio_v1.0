export const profile = {
  name: "Bouhcine Amezouar",
  firstName: "Bouhcine",
  lastName: "Amezouar",
  role: "Full-Stack Developer",
  email: "bouhcine_amezouar@gmail.com",
  location: "Casablanca, Morocco",
  school: "1337 Coding School",
  graduationYear: "2024",
  internshipMonths: "06",
  resumePath: "/Bouhcine_Amezouar.pdf",
} as const;

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
    href: "https://www.linkedin.com/in/bouhcine-amezouar/",
    external: true,
  },
  {
    id: "email",
    name: "Email",
    href: `mailto:${profile.email}`,
    external: false,
  },
] as const;

export const portfolioStats = [
  { value: "1337", label: "Coding School" },
  { value: profile.graduationYear, label: "OFPPT Graduate" },
  { value: profile.internshipMonths, label: "Months Interning" },
] as const;

export const aboutFacts = [
  { number: "01", value: "23", label: "Years Old" },
  { number: "02", value: "1337", label: "Current School" },
  {
    number: "03",
    value: profile.graduationYear,
    label: "OFPPT Graduate",
  },
  {
    number: "04",
    value: profile.internshipMonths,
    label: "Months Interning",
  },
] as const;

export const coreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Git",
] as const;

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Maou3idy",
    category: "Full Stack",
    year: "1337",
    description:
      "A healthcare appointment platform created by a five-person team for ft_transcendence. I built the booking and scheduling domain across the frontend, backend and database.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "RabbitMQ"],
    type: "Full Stack / Team",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Atlas Team Manager",
    category: "Full Stack",
    year: "In progress",
    description:
      "A team-management platform with workspaces, members, projects, task boards, authentication, role-based permissions and an administration dashboard.",
    tags: ["Next.js", "NestJS", "TypeScript", "Docker"],
    type: "Personal Project",
    featured: true,
  },
  {
    id: 3,
    number: "03",
    title: "Webserv",
    category: "Systems",
    year: "1337",
    description:
      "An HTTP server project focused on sockets, request and response handling, configuration, networking and client/server architecture.",
    tags: ["HTTP", "Networking", "Sockets", "Linux"],
    type: "Systems / Networking",
    featured: true,
  },
  {
    id: 4,
    number: "04",
    title: "Inception",
    category: "Infrastructure",
    year: "1337",
    description:
      "A system-administration project that builds a multi-service environment with containers, images, volumes, networks and persistent data.",
    tags: ["Docker", "Docker Compose", "Linux", "Networks"],
    type: "Infrastructure",
    featured: false,
  },
  {
    id: 5,
    number: "05",
    title: "E-Commerce Frontend",
    category: "Frontend",
    year: "Practice project",
    description:
      "A frontend-focused storefront built to practice reusable components, responsive layouts, product presentation and navigation.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
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
    period: "2024 — Present",
    description:
      "Strengthening my engineering foundations through project-based work in systems programming, networking, web development, Docker and team collaboration.",
    achievements: [
      "Built Webserv and Inception",
      "Full-stack work on ft_transcendence",
      "Linux, networking and Docker",
    ],
    status: "Current",
  },
  {
    id: "ofppt",
    number: "02",
    title: "Web Full-Stack Development",
    company: "OFPPT — CFPM Sidi Moumen",
    period: "2022 — 2024",
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
    period: "2 months",
    description:
      "Worked with a development team on an e-commerce application, connecting React interfaces with Laravel APIs and a MySQL database.",
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
    period: "4 months",
    description:
      "Managed database information and designed frontend interfaces for displaying and interacting with structured data.",
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
