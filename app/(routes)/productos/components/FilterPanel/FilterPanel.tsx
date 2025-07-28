"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useCategoryStore } from "@/store/CategoryStore";
import { useBrandStore } from "@/store/BrandStore";
import { useEffect } from "react";

export function FilterSection() {
  // Categorías
  const {
    categories,
    loading: loadingCategories,
    selectedCategories,
    toggleCategory,
    clearCategories,
    fetchCategories,
  } = useCategoryStore();

  // Marcas
  const {
    brands,
    loading: loadingBrands,
    selectedBrands,
    toggleBrand,
    clearBrands,
    fetchBrands,
  } = useBrandStore();

  useEffect(() => {
    fetchCategories();
    fetchBrands();
  }, [fetchCategories, fetchBrands]);

  const clearAllFilters = () => {
    clearCategories();
    clearBrands();
  };

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedBrands.length > 0;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filtros</h2>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            <span>Limpiar todo</span>
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Filtro por categorías */}
        <div>
          <h3 className="font-medium mb-3">Categorías</h3>
          {loadingCategories ? (
            <p>Cargando categorías...</p>
          ) : (
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.nombre)}
                    onCheckedChange={() => toggleCategory(category.nombre)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {category.nombre}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Filtro por marcas */}
        <div>
          <h3 className="font-medium mb-3">Marcas</h3>
          {loadingBrands ? (
            <p>Cargando marcas...</p>
          ) : (
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand.id}`}
                    checked={selectedBrands.includes(brand.nombre)}
                    onCheckedChange={() => toggleBrand(brand.nombre)}
                  />
                  <label
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {brand.nombre}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
