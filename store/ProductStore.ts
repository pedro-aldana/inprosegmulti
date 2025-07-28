import { create } from "zustand";
import { ProductType } from "@/types/product";
import {
  fetchAllProducts,
  fetchProductBySlug,
} from "@/lib/api/products";


interface ProductStore {
  products: ProductType[];
  product: ProductType | null;
  currentProduct: string | null;
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  fetchProduct: (slug: string) => Promise<void>;
  getFilteredProducts: (categories: string[], brands: string[]) => ProductType[];
}

export const useProductStore = create<ProductStore>((set,get) => ({

    products: [],
    product: null,
    currentProduct: null,
    loading: false,
    error: null,

    fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const products = await fetchAllProducts();
      set({ products, loading: false });
    } catch (err) {
      console.error("Error fetching products:", err);
      set({ products: [], loading: false, error: "Failed to fetch products." });
    }
  },

  fetchProduct: async (slug: string) => {
    set({ loading: true, error: null });
    try {
      const product = await fetchProductBySlug(slug);
      set({
        product,
        currentProduct: product?.nombre ?? slug,
        loading: false,
      });
    } catch (err) {
      console.error("Error fetching product:", err);
      set({ product: null, loading: false, error: "Failed to fetch product." });
    }
  },

  getFilteredProducts: (categories, brands) => {
    const { products } = get();

    if (categories.length === 0 && brands.length === 0) return products;

    return products.filter((product) => {
      const categoryMatch =
        categories.length === 0 ||
        categories.includes(product.categoria?.nombre);

      const brandMatch =
        brands.length === 0 || brands.includes(product.marca?.nombre);

      return categoryMatch && brandMatch;
    });
  },



}))