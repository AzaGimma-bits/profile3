import { HardwareProject } from "@/types/hardware";

export const hardwareProjects: HardwareProject[] = [
  {
    id: "robotic-arm",
    title: "Brazo Mecánico Programable",
    description:
      "Brazo robótico con control programable capaz de manipular objetos, incluyendo agarre de taza.",

    tags: ["Arduino", "Servomotores", "Impresión 3D", "Cinemática"],

    status: "in-progress", // completed | in-progress | idea

    media: {
      type: "image", // image | video | model
      src: "/projects/arm.png",
    },

    highlights: [
      "Control independiente de dedos",
      "Capacidad de agarre funcional",
      "Diseño modular imprimible",
    ],

    techDetails: {
      microcontroller: "Arduino",
      materials: ["PLA"],
      components: ["Servos SG90", "Fuente 5V"],
    },

    links: {
      github: null,
      demo: null,
    },
  },

  {
    id: "3d-prototyping",
    title: "Prototipado 3D Funcional",
    description:
      "Diseño e impresión de piezas funcionales para soluciones personalizadas.",

    tags: ["CAD", "3D Printing", "Prototyping"],

    status: "completed",

    media: {
      type: "image",
      src: "/projects/print.jpg",
    },

    highlights: [
      "Optimización de piezas para resistencia",
      "Iteración rápida de diseños",
    ],

    techDetails: {
      software: ["Fusion 360"],
      materials: ["PLA", "PETG"],
    },

    links: {},
  },
];