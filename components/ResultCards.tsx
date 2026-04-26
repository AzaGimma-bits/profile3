//Componente de tarjeta de resultados utilizado para mostrar tops en regionales de pokemon tcg.
export default function CategoryCard({ title, data }: any) {
  return (
    <div className="border border-gray-800 rounded-xl p-5 
                    hover:border-gray-600 transition w-full">

      <h3 className="text-sm text-gray-500 mb-4">
        {title}
      </h3>

      <ul className="space-y-2 text-sm">

        {[...data, ...Array(4 - data.length).fill(null)]
          .slice(0, 4)
          .map((item: any, i: number) => (
            <li key={i} className="flex justify-between text-gray-400">

              {item ? (
                <>
                  <span className="truncate">
                    {item.event}
                  </span>

                  <span className={
                    item.result.includes("Top 1") ? "text-yellow-400" :
                    item.result.includes("Top 2") ? "text-blue-400" :
                    item.result.includes("Top 4") ? "text-purple-400" :
                    item.result.includes("Top 8") ? "text-green-400" :
                    "text-gray-400"
                  }>
                    {item.result}
                  </span>
                </>
              ) : (
                <span className="text-gray-600 italic">
                  — slot disponible —
                </span>
              )}

            </li>
        ))}

      </ul>

    </div>
  );
}