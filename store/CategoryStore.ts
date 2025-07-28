import axios from "axios";
import {create} from "zustand";
import { CategoryType } from "@/types/category";


interface CategoryStore {

    categories: CategoryType[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => Promise<void>;

    // estado de seleccion para filtros
    selectedCategories: String[];
    toggleCategory: (categoryName: string) => void;
    clearCategories: () => void;
}

const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories?populate=*`;


export const useCategoryStore = create<CategoryStore>((set,get) => ({

    categories: [],
    loading: false,
    error: null,
    selectedCategories: [],

    fetchCategories: async () => {
        set({loading: true, error: null});
        try {
            const response = await axios.get<{data: CategoryType[]}>(API_URL);
            set({categories: response.data.data, loading:false})
        } catch (error) {
            console.error("Error fetching categories:", error);
            set({
                loading: false,
                error: "Failed to fetch categories.",
                categories: []
            })
        }
    },

    toggleCategory: (categoryName: string) => {
        const { selectedCategories } = get();
        set({
      selectedCategories: selectedCategories.includes(categoryName)
        ? selectedCategories.filter((c) => c !== categoryName)
        : [...selectedCategories, categoryName],
    });
    },

    clearCategories: () => {
        set({selectedCategories: []})
    }




}))