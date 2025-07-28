import { create } from "zustand";
import { ProductType } from "@/types/product";
import { fetchFeaturedProducts } from "@/lib/api/products";

interface FeaturedStore {
  products: ProductType[];
  loading: boolean;
  error: string | null;
  fetchFeaturedProducts: () => Promise<void>;
}


export const useFeaturedStore = create<FeaturedStore>((set) => ({
  products: [],
  loading: false,
  error: null,

  fetchFeaturedProducts: async () => {
    set({ loading: true, error: null });

    try {
      const products = await fetchFeaturedProducts();
      set({ products, loading: false });
    } catch (error) {
      console.error("Error fetching featured products:", error);
      set({
        products: [],
        loading: false,
        error: "Failed to fetch featured products.",
      });
    }
  },
}));