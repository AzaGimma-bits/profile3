import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      
      <h1 className="text-2xl font-bold mb-4 ">Proyectos</h1>

      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}