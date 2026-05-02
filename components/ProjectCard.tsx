"use client";

import { useState, useRef, useEffect } from "react";

type Props = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  link,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState("72px");
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("72px");
      }
    }
  }, [expanded]);

  return (
    <div className="border border-gray-700 rounded-xl p-4 bg-gray-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
      
      <h2 className="text-lg font-semibold">{title}</h2>

      {/* Descripción */}
      <p
        ref={contentRef}
        style={{ maxHeight: height }}
        className="text-gray-400 text-sm mt-2 overflow-hidden transition-all duration-300 ease-in-out break-words"
      >
        {description}
      </p>

      {/* Botón */}
      {description.length > 120 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-400 text-xs mt-2 hover:underline"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}

      {/* Tecnologías */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-800 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Link */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 text-sm mt-3 inline-block hover:underline"
        >
          Ver proyecto →
        </a>
      ) : (
        <span className="text-gray-600 text-xs mt-3 inline-block">
          Privado / No disponible
        </span>
      )}
    </div>
  );
}