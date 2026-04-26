function getStatusColor(status: string) {
  switch (status) {
    case "completed":
      return "bg-green-500/20 text-green-400";
    case "in-progress":
      return "bg-yellow-500/20 text-yellow-400";
    case "idea":
      return "bg-gray-500/20 text-gray-400";
  }
}
import { HardwareProject } from "@/types/hardware";

export function HardwareCard({ project }: { project: HardwareProject }) {
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition group">

      {/* MEDIA */}
      <div className="h-48 bg-gray-900 flex items-center justify-center">
        <img
          src={project.media.src}
          alt={project.title}
          className="object-cover w-full h-full group-hover:scale-105 transition"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">

        {/* TITLE + STATUS */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <span className={`text-xs px-2 py-1 rounded ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm">
          {project.description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* HIGHLIGHTS */}
        <ul className="text-sm text-gray-300 space-y-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-400">•</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}