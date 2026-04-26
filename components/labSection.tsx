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