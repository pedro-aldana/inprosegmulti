import axios from "axios";
import {create} from "zustand";
import { BrandType } from "@/types/brand";



interface BrandStore {
    brands: BrandType[];
    selectedBrands: string[];
    loading: boolean;
    error: string | null;
    fetchBrands: () => Promise<void>;
    toggleBrand: (brandName: string) => void;
    clearBrands: () => void;
}

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/marcas`;

export const useBrandStore = create<BrandStore>((set, get) => ({
  brands: [],
  selectedBrands: [],
  loading: false,
  error: null,

  fetchBrands: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<{ data: BrandType[] }>(API_URL);
      set({ brands: response.data.data, loading: false });
    } catch (error) {
      console.log("error", error);
      set({ loading: false, error: "Failed to fetch brands", brands: [] });
    }
  },

  toggleBrand: (brandName) => {
    const { selectedBrands } = get();
    set({
      selectedBrands: selectedBrands.includes(brandName)
        ? selectedBrands.filter((b) => b !== brandName)
        : [...selectedBrands, brandName],
    });
  },

  clearBrands: () => {
    set({ selectedBrands: [] });
  },
}));