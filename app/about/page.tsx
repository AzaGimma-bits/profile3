import RotatingCard from "../../components/RotatingCard";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXTO */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Sobre mí</h1>

          <p className="text-gray-400">
            Ingeniero Civil Informático con interés en backend, automatización
            y desarrollo de soluciones eficientes.
          </p>

          <p className="text-gray-400 mt-4">
           Me apasiona aprender nuevas tecnologías y enfrentar desafíos técnicos complejos. 
           Disfruto especialmente aquellos espacios donde puedo construir, experimentar y optimizar procesos.
          </p>

          <p className="text-gray-400 mt-4">
            En mi tiempo libre, disfruto de los videojuegos, el TCG, el deporte y el café, que considero parte fundamental de mi rutina diaria. 
          </p>
          <p className="text-gray-400 mt-4">
            Participé en el centro de alumnos de mi universidad, lo que me permitió
            desarrollar habilidades de liderazgo y trabajo en equipo.
          </p>
        </div>

        {/* CARD GIRATORIA */}
        <div className="flex justify-center">
          <div className="p-4">
            <RotatingCard
              front="/foto1.png"
              back="/foto2.png"
            />
          </div>
        </div>

      </div>
                {/* EXPERIENCIA COMPLEMENTARIA */}
<div className="mt-20">

  <h2 className="text-lg font-medium mb-8">
    Experiencia complementaria
  </h2>

  <div className="divide-y divide-gray-800">

    <div className="py-4">
      <p className="font-medium text-white">
        Asistente de Ventas de Merchandising en Eventos – Riot Games
      </p>
      <p className="text-sm text-gray-400 mt-1 leading-relaxed">
        Participación en VALORANT Masters (Chile), con enfoque en atención al cliente y soporte operativo en entornos de alta demanda.
      </p>
    </div>

    <div className="py-4">
      <p className="font-medium text-white">
        Asistente en Clínica Veterinaria
      </p>
      <p className="text-sm text-gray-400 mt-1 leading-relaxed">
        Atención a clientes, organización de insumos y apoyo en procedimientos clínicos básicos.
      </p>
    </div>

    <div className="py-4">
      <p className="font-medium text-white">
        Instructor de Natación
      </p>
      <p className="text-sm text-gray-400 mt-1 leading-relaxed">
        Desarrollo de habilidades pedagógicas, comunicación efectiva y liderazgo en contextos formativos.
      </p>
    </div>

  </div>

</div>
      {/* BLOQUE CV + LINKS */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">
  Si quieres conocer un poco más de mi lado personal, puedes encontrarme aquí:
</p>

<div className="mt-16 flex flex-col items-center">

  <div className="flex items-center gap-4 flex-wrap justify-center">

    {/* PERSONAL */}
    <div className="flex items-center gap-3">
      <a
        href="https://www.instagram.com/felipe_castro.exe/"
        target="_blank"
        className="text-sm text-gray-300 hover:text-white transition"
      >
        Instagram
      </a>

      <span className="text-gray-600">|</span>

      <a
        href="https://x.com/AzaGimma"
        target="_blank"
        className="text-sm text-gray-300 hover:text-white transition"
      >
        X
      </a>
    </div>

    {/* LÍNEA SEPARADORA CENTRAL */}
    <div className="hidden md:block w-10 h-px bg-gray-700" />

    {/* PROFESIONAL */}
    <div className="flex items-center gap-3">
      <a
        href="https://github.com/AzaGimma-bits"
        target="_blank"
        className="text-sm text-gray-500 hover:text-white transition"
      >
        GitHub
      </a>

      <span className="text-gray-600">|</span>

      <a
        href="https://linkedin.com/in/felipe-guillermo-castro-aguilar-az"
        target="_blank"
        className="text-sm text-gray-500 hover:text-white transition"
      >
        LinkedIn
      </a>
    </div>

  </div>

</div>
      </div>

    </section>
  );
} 