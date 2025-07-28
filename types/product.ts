export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
}

type Brand = {
  id: number;
  nombre: string;
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

type Category = {
  id: number;
  nombre: string;
  slug: string;
};

export type ProductType = {
  id: string;
  nombre: string;
  slug: string;
  descripcion: string;
  activo: boolean;
  codigo: string;
  colores: string;
  imagen: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
    };
  } | null;
  categoria: Category;
  marca: Brand;
};