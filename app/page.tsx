import {
  Code,
  BarChart3,
  GitBranch,
  Cpu,
  Globe,
} from "lucide-react";

export default function Home() {
  const skills = [
    {
      title: "Desarrollo Web y DevOps",
      icon: <Code size={28} />,
      items: ["Flask", "React", "RESTful APIs", "Docker", "HTML"],
      color: "bg-blue-500/20 text-blue-400",
    },
    {
      title: "Automatización y Business Intelligence",
      icon: <BarChart3 size={28} />,
      items: ["Power BI", "Power Automate", "Power Apps"],
      color: "bg-green-500/20 text-green-400",
    },
    {
      title: "Control de versiones",
      icon: <GitBranch size={28} />,
      items: ["Git", "GitHub"],
      color: "bg-purple-500/20 text-purple-400",
    },
    {
      title: "Lenguajes de programación",
      icon: <Cpu size={28} />,
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
      icon: <Globe size={28} />,
      items: ["Español (nativo)", "Inglés (intermedio)"],
      color: "bg-cyan-500/20 text-cyan-400",
    },
  ];

  return (
    <section className="py-20 px-6  text-white">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <div className="text-center">
          {/* Línea 1 */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="opacity-0 animate-fade-in">
              Hola, soy
            </span>
          </h1>

          {/* Línea 2 */}
          <h2 className="text-5xl md:text-6xl font-bold text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] mt-2">
            <span className="neon-animated opacity-0">
              Felipe
            </span>
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 opacity-0 animate-fade-in delay-2">
            Ingeniero Civil Informático enfocado en desarrollo backend y soluciones automatizadas.
          </p>
        </div>

        {/* STACK HEADER */}
        <div className="mt-16 text-center">
          <p className="text-blue-400 tracking-widest text-sm mb-2">
            ● HABILIDADES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stack Tecnológico
          </h2>

          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6 rounded"></div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Tecnologías y herramientas que utilizo para construir soluciones eficientes y escalables.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-12 space-y-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col md:flex-row md:items-center md:justify-between border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4 min-w-[250px]">
                <div className={`p-3 rounded-lg ${skill.color}`}>
                  {skill.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {skill.title}
                </h3>
              </div>

              {/* DIVIDER */}
              <div className="hidden md:block h-8 w-px bg-gray-700 mx-6"></div>

              {/* RIGHT */}
              <div className="flex flex-wrap gap-3 text-gray-300 text-sm mt-4 md:mt-0 md:justify-end">
                {skill.items.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    {i !== 0 && <span className="text-blue-500">•</span>}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}