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
            Me apasiona aprender nuevas tecnologías y enfrentar desafíos técnicos
            complejos.
          </p>

          <p className="text-gray-400 mt-4">
            En mi tiempo libre, disfruto de los videojuegos, el tcg y el deporte.
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

      {/* BLOQUE CV + LINKS */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">
          Aquí tienes mi CV. Si necesitas más información, no dudes en contactarme.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          
          <a
            href="/cv/cv.pdf"
            download
            className="border border-gray-600 px-5 py-2 rounded-lg hover:border-blue-400 transition"
          >
            CV
          </a>

          <a
            href="https://github.com/AzaGimma-bits"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-5 py-2 rounded-lg hover:border-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/felipe-guillermo-castro-aguilar-az"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-5 py-2 rounded-lg hover:border-white transition"
          >
            LinkedIn
          </a>

        </div>
      </div>

    </section>
  );
} 