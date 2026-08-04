import {
  Home,
  User,
  LayoutGrid,
  BadgeCheck,
  Flag,
  NotebookPen,
  Github,
  FileText,
} from "lucide-react";

export const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "projects", label: "Projects", icon: LayoutGrid, href: "#projects" },
  { id: "certifications", label: "Certificates", icon: BadgeCheck, href: "#certifications" },
  { id: "ctfs", label: "CTFs", icon: Flag, href: "#ctfs" },
  { id: "blogs", label: "Blogs", icon: NotebookPen, href: "#blogs" },
  { id: "github", label: "GitHub", icon: Github, href: "#github" },
  { id: "resume", label: "Resume", icon: FileText, href: "#resume" },
];
