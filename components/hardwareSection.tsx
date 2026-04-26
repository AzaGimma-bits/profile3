import { HardwareProject } from "@/types/hardware";
import { HardwareCard } from "./HardwareCard";

interface Props {
  data: HardwareProject[];
}

export default function HardwareSection({ data }: Props) {
  return (
    <section>
      <div >

        {/* HEADER */}
        <div className="mb-12">

          <h2 className="text-xl font-medium mb-3">
            Impresión 3D & Hardware
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Diseño, prototipado y desarrollo de soluciones físicas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((project) => (
            <HardwareCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}