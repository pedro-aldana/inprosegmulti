"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useProductStore } from "@/store/ProductStore";
import { useCategoryStore } from "@/store/CategoryStore";
import { useBrandStore } from "@/store/BrandStore";
import { Filter } from "lucide-react";
import { FilterSection } from "./components";
import { ProductSkeleton } from "./components";
import { Banner, ProductCard } from "./components";

export default function ProductosPage() {
  const { fetchProducts, loading, getFilteredProducts } = useProductStore();
  const { selectedCategories } = useCategoryStore();
  const { selectedBrands } = useBrandStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Obtener productos filtrados
  const filteredProducts = getFilteredProducts(
    selectedCategories.map((cat) => cat.toString()),
    selectedBrands
  );
  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-8 -mt-12 lg:mt-4">
        {/* Mobile filter in accordion */}
        <div className="md:hidden mb-6">
          <Accordion type="single" collapsible>
            <AccordionItem value="filters">
              <AccordionTrigger className="py-3">
                <div className="flex items-center gap-2">
                  <Filter size={16} />
                  <span className="text-base font-medium">Filtros</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <FilterSection />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Products (70% on desktop) */}
          <motion.div layout className="md:w-[70%] order-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                {loading ? (
                  <span>Cargando productos...</span>
                ) : (
                  <span>{filteredProducts.length} productos encontrados</span>
                )}
              </p>

              {/* Desktop sort dropdown */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading ? (
                // Loading skeletons
                Array.from({ length: 6 }).map((_, index) => (
                  <ProductSkeleton key={index} />
                ))
              ) : (
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {!loading && filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 p-8 rounded-lg text-center"
              >
                <h3 className="text-xl font-medium mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600">
                  {selectedCategories.length > 0
                    ? "No hay productos en las categorías seleccionadas."
                    : "Actualmente no hay productos disponibles."}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Filters (30% on desktop) - Hidden on mobile */}
          <div className="hidden md:block md:w-[30%] order-2">
            <FilterSection />
          </div>
        </div>
      </div>
    </>
  );
}
