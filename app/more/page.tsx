import PokemonSection from "@/components/pokemon";
import { labExperiments } from "@/lib/otherProjects";
import LabItem from "@/components/otherProjects";
import LabSection from "@/components/labSection"; 
import { hardwareProjects } from "@/lib/hardware";
import HardwareSection from "@/components/hardwareSection";

export default function ProjectsExtra() {
  return (
    <section className="w-full px-6 md:px-16 py-20">
      {/* Guccito Flotante */}
      <a href="https://www.youtube.com/watch?v=mONTSRzdRZw" target="_blank" className="fixed bottom-4 left-4 z-50">
        <img
          src="/images/guccito3.png"
          alt="guiño"
          className="w-50 opacity-70 hover:opacity-100 hover:scale-110 transition"
        />
      </a>
      <div className="max-w-5xl mx-auto flex flex-col gap-16">

         <div className="py-14 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
      
      {/* IMAGEN */}
      <div className="relative w-full">
        <img
          src="/images/luffy.jpeg"
          alt="visual"
          className="w-full rounded-xl border border-gray-800 object-cover 
                     brightness-75 contrast-90 saturate-75 
                     hover:scale-[1.02] transition duration-300"
        />
        <div className="absolute inset-0 rounded-xl 
                        bg-gradient-to-l from-transparent via-black/30 to-black/80" />
      </div>
      {/* Primer bloque */}
      
       <div>
        <h1 className="text-sm text-gray-400 mb-2 tracking-[0.2em] uppercase">
          Sandbox
        </h1>

        <p className="text-lg text-gray-300 max-w-xl">
          Proyectos físicos, exploraciones personales y resultados competitivos.
        </p>
      </div>

    </div>
        {/* ===================== 3D ===================== */}
        <div>
         
            <HardwareSection data={hardwareProjects} />
        </div>

        {/* ===================== EXPLORACIONES ===================== */}
        <div>

          <h2 className="text-xl font-medium mb-3">
            Exploraciones
          </h2>

          <p className="text-gray-400 mb-6 max-w-xl">
            Ideas, pruebas y proyectos fuera del enfoque principal.
          </p>

            <LabSection />
        </div>

        {/* ===================== POKÉMON ===================== */}
        <div>
          <PokemonSection />
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <a
              href="https://limitlesstcg.com/players/9666"
              target="_blank"
              className="text-sm text-gray-500 hover:text-white transition"
            >
              Ver historial completo en Limitless →
            </a>
          </div>
          <br />

          {/* TWITCH BLOCK */}
          <div className="border border-purple-500/30 rounded-xl p-6
            flex flex-col md:flex-row items-center justify-between gap-6
            transition-all duration-300 hover:border-purple-500
            hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">

            {/* TEXTO */}
            <div>
              <p className="text-xs text-purple-400 mb-1">
                Contenido en vivo
              </p>

              <h3 className="text-lg font-medium mb-1">
                Canal de Twitch
              </h3>

              <p className="text-gray-400 text-sm">
                Partidas, torneos y análisis competitivo de Pokémon TCG.
              </p>
            </div>

            {/* BOTÓN */}
            <a
              href="https://www.twitch.tv/7mulligans"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg border border-purple-500
                text-purple-400 hover:bg-purple-500/10
                transition-all duration-300"
            >
              Ver canal
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}