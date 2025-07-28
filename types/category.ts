export type CategoryType = {
  id: number;
  nombre: string;
  slug: string;
  imagen: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  } | null;
};