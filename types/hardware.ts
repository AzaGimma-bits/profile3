export type HardwareProject = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "completed" | "in-progress" | "idea";

  media: {
    type: "image" | "video" | "model";
    src: string;
  };

  highlights: string[];

  techDetails?: {
    microcontroller?: string;
    materials?: string[];
    components?: string[];
    software?: string[];
  };

  links?: {
    github?: string | null;
    demo?: string | null;
  };
};