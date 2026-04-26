type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: Props) {
  return (
    <div className="border border-gray-700 rounded-xl p-4 bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="text-gray-400 text-sm mt-2 line-clamp-3">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-800 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

     {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm mt-3 inline-block hover:underline"
        >
          Ver más →
        </a>
      ) : (
        <span className="text-gray-600 text-xs mt-3 inline-block">
          Privado / No disponible
        </span>
      )}
    </div>
  );
}