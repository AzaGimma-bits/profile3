export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      
      <h1 className="text-3xl font-bold mb-4 tracking-tight">
        Contacto
      </h1>

      <p className="text-gray-400 mb-8 max-w-xl mx-auto">
        Si quieres contactarme, puedes hacerlo por correo o redes profesionales.
        También respondo señales de humo, cartas y, en casos excepcionales, vía Dragonite.
      </p>

      {/* BOTONES */}
      <div className="flex justify-center gap-4 flex-wrap">
        
        <a
          href="mailto:tuemail@gmail.com"
          className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400"
        >
          <span className="relative z-10">Correo</span>

          {/* Hover background */}
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-300" />
        </a>

        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-white"
        >
          <span className="relative z-10">GitHub</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition duration-300" />
        </a>

        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-400"
        >
          <span className="relative z-10">LinkedIn</span>
          <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-10 transition duration-300" />
        </a>

        <a
          href="https://instagram.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative border border-gray-700 px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:border-pink-400"
        >
          <span className="relative z-10">Instagram</span>
          <div className="absolute inset-0 bg-pink-400 opacity-0 group-hover:opacity-10 transition duration-300" />
        </a>

      </div>

      {/* STATUS */}
      <p className="mt-8 text-sm text-green-400 animate-pulse">
        Disponible para proyectos y oportunidades laborales
      </p>

    </section>
  );
} 