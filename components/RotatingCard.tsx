"use client";

import { useEffect, useState } from "react";

type Props = {
  front: string;
  back: string;
};

export default function RotatingCard({ front, back }: Props) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="w-64 aspect-square perspective">
    
    {/* CAPA QUE RECORTA (círculo) */}
    <div className="w-full h-full rounded-full overflow-hidden">
      
      {/* CAPA QUE ROTA */}
      <div
        className={`relative w-full h-full transform-style transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <img
          src="/images/image1.jpg"
          className="absolute inset-0 w-full h-full object-cover backface-hidden"
        />

        <img
          src="/images/image2.jpg"
          className="absolute inset-0 w-full h-full object-cover rotate-y-180 backface-hidden"
        />
      </div>

    </div>
  </div>
);
}