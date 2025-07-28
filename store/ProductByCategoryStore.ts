import { create } from "zustand";
import { ProductType } from "@/types/product";
import { fetchProductsByCategorySlug } from "@/lib/api/products";

interface ProductByCategoryStore {
  products: ProductType[];
  currentCategory: string | null;
  loading: boolean;
  error: string | null;
  fetchProducByCategory: (categorySlug: string) => Promise<void>;
}

export const useProductByCategoryStore = create<ProductByCategoryStore>((set) => ({
  products: [],
  currentCategory: null,
  loading: false,
  error: null,

  fetchProducByCategory: async (slug: string) => {
    set({ loading: true, error: null });

    try {
      const { products, categoryName } = await fetchProductsByCategorySlug(slug);
      set({
        products,
        currentCategory: categoryName,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching category products:", error);
      set({
        products: [],
        currentCategory: null,
        loading: false,
        error: "Failed to fetch category products.",
      });
    }
  },
}));
