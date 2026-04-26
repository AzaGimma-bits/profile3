import { Code, BarChart3, GitBranch, Cpu, Globe } from "lucide-react";

export const skills = [
    {
      title: "Desarrollo Web y DevOps",
      icon: Code,
      items: ["Flask", "React", "RESTful APIs", "Docker", "HTML"],
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      title: "Automatización y Business Intelligence",
      icon: BarChart3,
      items: ["Power BI", "Power Automate", "Power Apps"],
      color: "bg-green-500/20 text-green-400",
    },
    {
      title: "Control de versiones",
      icon: GitBranch,
      items: ["Git", "GitHub"],
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      title: "Lenguajes de programación",
      icon: Cpu,
      items: [
        "Python (Avanzado)",
        "SQL (Intermedio)",
        "JavaScript (Intermedio)",
        "Java",
        "C",
      ],
      color: "bg-yellow-500/20 text-yellow-400",
    },
    {
      title: "Idiomas",
      icon: Globe,
      items: ["Español (nativo)", "Inglés (intermedio)"],
      color: "bg-cyan-500/20 text-cyan-400",
    },
  ];
