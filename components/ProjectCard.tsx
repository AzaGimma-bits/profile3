type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: Props) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400">{description}</p>

      <div className="mt-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-sm bg-gray-800 px-2 py-1 mr-2 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <a href={link} className="text-blue-400 mt-2 inline-block">
        Ver más →
      </a>
    </div>
  );
}