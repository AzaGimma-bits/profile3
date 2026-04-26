//Mapeo de los proyectos e ideas en la sección "Más allá del código" utilizando el componente LabItem para cada elemento. Esta sección incluye proyectos e ideas que no encajan en las categorías principales, pero que quiero incluir como parte de mi portafolio para mostrar mi curiosidad y capacidad de aprendizaje en áreas diversas.
import LabItem from "./otherProjects";
import { labExperiments } from "@/lib/otherProjects";

export default function LabSection() {
  return (
    <div className="flex flex-col gap-6">
      {labExperiments.map((item) => (
        <LabItem key={item.title} {...item} />
      ))}
    </div>
  );
}