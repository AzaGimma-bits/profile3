// Componente para mostrar las habilidades y tecnologías que manejo, organizado en categorías como desarrollo web, automatización, control de versiones, lenguajes de programación e idiomas. Cada categoría tiene un ícono representativo y una lista de habilidades específicas.
type Skill = {
  title: string;
  icon: any; // luego lo tipamos mejor
  items: string[];
  color?: string;
};

export default function SkillsSection({ data }: { data: Skill[] }) {
  return (
    <div className="space-y-6">
      {data.map((skill) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.title}
            className="flex flex-col gap-2 border border-gray-800 rounded-lg p-4 hover:border-blue-500 transition"
          >
            <div className="flex gap-4">
  <div className={`p-3 rounded-lg ${skill.color}`}>
    <Icon size={24} />
  </div>

  <div className="flex flex-col">
    <h3 className="font-semibold text-lg">
      {skill.title}
    </h3>

    <div className="text-sm text-gray-400">
      {skill.items.join(" · ")}
    </div>
  </div>
</div>
          </div>
        );
      })}
    </div>
  );
}