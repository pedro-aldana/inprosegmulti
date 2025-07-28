// lib/api/products.ts
import axios from "axios";
import { ProductType } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchAllProducts(): Promise<ProductType[]> {
  const { data } = await axios.get<{ data: ProductType[] }>(
    `${BASE_URL}/api/products?populate=*`
  );
  return data.data;
}

export async function fetchProductBySlug(slug: string): Promise<ProductType | null> {
  const { data } = await axios.get<{ data: ProductType[] }>(
    `${BASE_URL}/api/products?filters[slug][$eq]=${slug}&populate[imagen][fields][0]=url&populate[marca][populate][imagen][fields][0]=url`
  );

  return data.data.length > 0 ? data.data[0] : null;
}


export async function fetchFeaturedProducts(): Promise<ProductType[]> {
  const { data } = await axios.get<{ data: ProductType[] }>(
    `${BASE_URL}/api/products?filters[destacado][$eq]=true&populate=*`
  );
  return data.data;
}

export async function fetchProductsByCategorySlug(slug: string): Promise<{
  categoryName: string;
  products: ProductType[];
}> {
  const { data } = await axios.get<{ data: ProductType[] }>(
    `${BASE_URL}/api/products?populate=*&filters[categoria][slug][$eq]=${slug}`
  );

  const products = data.data;
  const categoryName = products[0]?.categoria?.nombre || slug;

  return { categoryName, products };
}