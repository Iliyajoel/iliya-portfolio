import { motion } from "motion/react";
import { Github, Linkedin, Twitter, ExternalLink, Code2, Cpu, Globe, Zap, Mail, ChevronRight } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: "Zohar Energy",
    description: "Solar installation landing page for an Abuja-based firm, focusing on clean energy solutions and lead generation.",
    link: "https://zohar-energy.vercel.app",
    tags: ["React", "Tailwind", "Motion"],
    image: "https://picsum.photos/seed/solar/800/600"
  },
  {
    title: "Teacher Rhoda",
    description: "EdTech platform for a math tutor with integrated booking functionalities and student management.",
    link: "https://teacher-rhoda.vercel.app",
    tags: ["Next.js", "TypeScript", "Prisma"],
    image: "https://picsum.photos/seed/edu/800/600"
  },
  {
    title: "IJ International",
    description: "Tech startup hub based in Yola, bridging the gap between local talent and the global tech ecosystem.",
    link: "https://komsiri-technologies.vercel.app",
    tags: ["React", "Node.js", "Tailwind"],
    image: "https://picsum.photos/seed/tech/800/600"
  }
];

export const techStack = [
  { name: "HTML5", icon: <Code2 className="w-6 h-6" /> },
  { name: "CSS3", icon: <Globe className="w-6 h-6" /> },
  { name: "JavaScript", icon: <Zap className="w-6 h-6" /> },
  { name: "React", icon: <Cpu className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "Tailwind CSS", icon: <Globe className="w-6 h-6" /> },
];
