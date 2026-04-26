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
            className="flex justify-between border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${skill.color}`}>
                <Icon size={28} />
              </div>

              <h3 className="font-semibold text-lg">
                {skill.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 text-gray-300 text-sm">
              {skill.items.map((item, i) => (
                <span key={i}>
                  {i !== 0 && <span className="text-blue-500"> • </span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}