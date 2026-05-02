export default function Contact() {
  return (
    <section className="mt-20 px-4 max-w-2xl mx-auto text-center">

  {/* Línea superior */}
<h1 className="text-3xl font-bold mb-4 tracking-tight">
    Contacto
  </h1>

  <p className="text-gray-400 mb-8">
    Si quieres contactarme, puedes hacerlo por correo o redes profesionales.
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
  );
} 