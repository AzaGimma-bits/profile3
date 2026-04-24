import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Proyectos</h1>

      <div className="grid gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}