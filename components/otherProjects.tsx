type LabItemProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function LabItem({ title, description, tech, link }: LabItemProps) {
  return (
    <div className="border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      
      <div>
        <h3 className="text-sm text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="flex gap-2 flex-wrap text-xs">
        {tech.map((t) => (
          <span key={t} className="bg-gray-800 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm hover:underline w-fit"
        >
          Ver en GitHub →
        </a>
      )}
    </div>
  );
}