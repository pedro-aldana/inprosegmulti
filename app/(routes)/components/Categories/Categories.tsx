"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCategoryStore } from "@/store/CategoryStore";

export function Categories() {
  const { categories, loading, fetchCategories } = useCategoryStore();

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading)
    return <div className="text-center py-8">Cargando categorías...</div>;

  return (
    <div className="bg-[#f7f7f7] py-8 px-4 bg-no-repeat bg-top bg-cover">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#c2a110] mb-10">
          CATEGORIAS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const imageUrl = category?.imagen?.url
              ? `${backendUrl}${category.imagen.url}`
              : null;

            return (
              <Link
                key={category.id}
                href={`/categoria/${category.slug}`}
                className="block bg-white rounded shadow hover:shadow-md transition-shadow border-r-2"
              >
                <div className="p-4 flex flex-col items-center">
                  <div className="w-full h-40 relative mb-4 flex items-center justify-center">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={category.nombre}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <h3 className="text-center text-gray-800 text-sm font-medium">
                    {category.nombre}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
