"use client";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full border-t border-gray-800 mt-32 bg-gradient-to-b from-transparent to-gray-900"
    >
      {/* CONTENIDO FULL WIDTH */}
      <div className="w-full px-6 md:px-16 py-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* IZQUIERDA */}
          <div className="flex flex-col gap-4 max-w-md">
            

            <div className="flex gap-6 mt-2">
              <a
                href="https://linkedin.com/in/felipe-guillermo-castro-aguilar-az"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                LinkedIn
              </a>

              <button
                onClick={() => navigator.clipboard.writeText("felipe.castro.off@gmail.com")}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
              >
                Correo
              </button>

            </div>
          </div>

          {/* DERECHA (PNG con más presencia ahora) */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="w-20 h-20 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110">
              <a
                    href="https://www.youtube.com/watch?v=SECVGN4Bsgg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-20 h-20 block"
                    aria-label="Easter egg"
                    >
                    {/* Imagen base */}
                    <img
                        src="/images/guccito1.png"
                        alt="guiño"
                        className="absolute inset-0 w-full h-full object-contain
                                transition-opacity duration-300 group-hover:opacity-0"
                    />

                    {/* Imagen alternativa (aparece en hover) */}
                    <img
                        src="/images/guccito2.png"
                        alt="guiño hover"
                        className="absolute inset-0 w-full h-full object-contain
                                opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                </a>
            </div>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="w-full border-t border-gray-800 pt-6 mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Felipe Castro
        </div>

      </div>
    </footer>
  );
}