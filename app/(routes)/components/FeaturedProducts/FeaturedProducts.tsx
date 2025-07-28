"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useMobile } from "@/hooks/use-mobile";
import { useFeaturedStore } from "@/store/FeaturedStore";
import { ProductCard } from "../ProductCard";

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMobile();
  const [isTablet, setIsTablet] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { products, fetchFeaturedProducts } = useFeaturedStore();

  useEffect(() => {
    setMounted(true);
    fetchFeaturedProducts();

    const handleResize = () => {
      setIsTablet(!isMobile && window.innerWidth < 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, fetchFeaturedProducts]);

  const itemsPerPage = !mounted ? 4 : isMobile ? 1 : isTablet ? 2 : 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, products.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number): void => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12 px-4 md:px-6 bg-white bg-no-repeat bg-top bg-cover">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#c2a110] mb-10">
          PRODUCTOS DESTACADOS
        </h2>
        <div className="flex justify-between items-center mb-8">
          {mounted && !isMobile && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                aria-label="Previous products"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                aria-label="Next products"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div {...handlers} className="relative overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
          >
            <AnimatePresence mode="wait">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination indicators */}
        {mounted && (
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
