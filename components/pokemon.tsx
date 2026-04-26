import CategoryCard from "./ResultCards";

const leagueChallenge = [
  { event: "League Challenge Julio - Arcadia", result: "Top 1" },
  { event: "League Challenge Octubre - Arcadia", result: "Top 1" },
  { event: "League Challenge Diciembre - Arcadia", result: "Top 1" },
  { event: "League Challenge Enero - Oops ", result: "Top 2" },
];

const leagueCup = [
  { event: "League Cup Funnyko", result: "Top 1" },
  { event: "League Cup Arcadia", result: "Top 4" },
  { event: "League Cup Geekz", result: "Top 8" },
  { event: "League Cup Command Center", result: "Top 8" },
];

const regionals = [
  { event: "Regional Santiago", result: "Top 256" },
];

export default function PokemonSection() {
  return (
    <div>

      {/* Separador */}
      <div className="w-24 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 mb-6" />

      <h2 className="text-xl font-medium mb-3">
        Competitivo Pokémon TCG
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl">
        Resultados en torneos oficiales. Temporada 2026.
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">

        <CategoryCard
          title="League Challenge"
          data={leagueChallenge}
        />

        <CategoryCard
          title="League Cup"
          data={leagueCup}
        />

      </div>

      {/* REGIONALES */}
      <div>
        <h3 className="text-sm text-gray-500 mb-2">
          Regionales
        </h3>

        <ul className="space-y-1 text-sm text-gray-400">
          {regionals.map((item, i) => (
            <li key={i} className="flex justify-between">
              <span>{item.event}</span>
              <span>{item.result}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}