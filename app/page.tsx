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
            Ingeniero Civil Informático.
          </p>
        </div>
      </div>

      {/* STACK + PROYECTOS */}
  {/* ================= STACK + PROYECTOS (FULL WIDTH) ================= */}
  <div className="mt-24 w-full px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-5 gap-12">

    {/* ===== STACK (65%) ===== */}
    <div className="md:col-span-3">

      <div className="text-left">
        <p className="text-blue-400 tracking-widest text-sm mb-2">
          ● HABILIDADES
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stack Tecnológico
        </h2>

        <div className="w-16 h-1 bg-blue-500 mb-6 rounded"></div>

        <p className="text-gray-400 max-w-2xl">
          Tecnologías y herramientas que utilizo para construir soluciones eficientes y escalables.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col md:flex-row md:items-center md:justify-between border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <div className="flex items-center gap-4 min-w-[250px]">
              <div className={`p-3 rounded-lg ${skill.color}`}>
                {skill.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {skill.title}
              </h3>
            </div>

            <div className="hidden md:block h-8 w-px bg-gray-700 mx-6"></div>

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

    {/* ===== PROYECTOS (35%) ===== */}
    <div className="md:col-span-2 space-y-8">

      <div>
        <p className="text-blue-400 tracking-widest text-sm mb-2">
          ● PROYECTOS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Mis Proyectos
        </h2>

        <div className="w-16 h-1 bg-blue-500 mb-6 rounded"></div>
        <br></br>
      </div>

      <div className="space-y-8">

        <div className="border border-gray-800 rounded-xl p-8 hover:border-blue-500 hover:scale-[1.02] transition">
          <h3 className="font-semibold text-lg mb-2">
            Sistema de Gestión
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Aplicación web con backend en Flask y frontend en React.
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <span>React</span><span>•</span><span>Flask</span><span>•</span><span>API REST</span>
          </div>
        </div>

        <div className="border border-gray-800 rounded-xl p-8 hover:border-blue-500 hover:scale-[1.02] transition">
          <h3 className="font-semibold text-lg mb-2">
            Automatización BI
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Flujos automatizados con Power Automate integrando múltiples fuentes.
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            <span>Power Apps</span><span>•</span><span>Power Automate</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* contacto */}
<section className="mt-20 px-4 max-w-2xl mx-auto text-center">

  {/* Línea superior */}
<div className="w-16 h-[2px] mx-auto mb-8 bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
  <h1 className="text-3xl font-bold mb-4 tracking-tight">
    Contacto
  </h1>

  <p className="text-gray-400 mb-8">
    Si quieres contactarme, puedes hacerlo por correo o redes profesionales.
    También respondo señales de humo, cartas… y en situaciones críticas, vía Dragonite. (Tiempos de respuesta pueden variar según clima.)
  </p>

  {/* BOTONES */}
  <div className="flex justify-center gap-4 flex-wrap">
    
    <a
      href="mailto:felipe.castro.off@gmail.com"
      className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400"
    >
      <span className="relative z-10">Correo</span>
      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-300" />
    </a>

    <a
      href="https://github.com/AzaGimma-bits"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-white"
    >
      <span className="relative z-10">GitHub</span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
    </a>

    <a
      href="https://linkedin.com/in/felipe-guillermo-castro-aguilar-az"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400"
    >
      <span className="relative z-10">LinkedIn</span>
      <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition duration-300" />
    </a>

  </div>
  <br></br>
  <p className="text-gray-400 mb-6">
          Puedes revisar mi CV para más detalles sobre mi experiencia y habilidades. ¡Gracias por visitar mi portafolio!
        </p>
        <a
            href="/cv/cv.pdf"
            download = "Felipe_Castro_CV.pdf"
            className="border border-gray-600 px-5 py-2 rounded-lg hover:border-blue-400 transition"
          >
            CV
          </a>

  {/* STATUS */}
  <p className="mt-10 text-sm text-green-400 animate-pulse">
    Disponible para proyectos y oportunidades laborales
  </p>

</section>
      
    </section>
  );
}