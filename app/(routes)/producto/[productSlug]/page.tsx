"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProductStore } from "@/store/ProductStore";
import { useEffect } from "react";
import { useParams } from "next/navigation";

import { ColorDisplay } from "./components";
import { ProductSkeleton } from "@/components/Shared/ProductSkeleton";

export default function ProductDetail() {
  const params = useParams();
  const { productSlug } = params;

  const { product, fetchProduct, loading } = useProductStore();

  useEffect(() => {
    if (productSlug) {
      fetchProduct(productSlug as string);
    }
  }, [productSlug, fetchProduct]);

  const handleWhatsAppClick = () => {
    // Mensaje que se enviará por WhatsApp
    const message = `Hola, estoy interesado en el producto: ${product?.nombre} ( REFERENCIA ${product?.codigo}).\n\nMe gustaría solicitar más información o cotización.`;

    const phoneNumber = "+573005645710";

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    // Abrir WhatsApp con el mensaje
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <div className="flex items-center space-x-3">
          {/* Puntos animados */}
          <div
            className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
        <p className="text-gray-600 font-medium">
          Cargando detalles del producto...
        </p>
        <ProductSkeleton />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl mt-4 ">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column - Product Image */}
        <div className="flex justify-center items-start">
          <div className="bg-white p-4 rounded-lg">
            <Image
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
                product?.imagen?.url || ""
              }`}
              alt={`${product?.nombre}`}
              width={300}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right column - Product Details */}
        <div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600 text-sm">
                REFERENCIA: {product?.codigo}
              </p>
              <h1 className="text-2xl font-bold text-[#003366] mt-2">
                {product?.nombre}
              </h1>
            </div>
            <div>
              {product?.marca?.imagen?.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.marca.imagen.url}`}
                  alt={product.marca.nombre || "Logo de la marca"}
                  width={90}
                  height={40}
                />
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <Button
              className="w-full md:w-xs text-white px-6 py-2 rounded cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              COMPRAR / COTIZAR
            </Button>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Tabs defaultValue="description">
              <TabsList className="w-full grid grid-cols-2 bg-transparent h-auto p-0 mb-6">
                <TabsTrigger
                  value="description"
                  className="bg-[#fbbd1a] text-black py-3 rounded-none data-[state=active]:bg-yellow-400 data-[state=inactive]:bg-gray-200"
                >
                  DESCRIPCION
                </TabsTrigger>
                <TabsTrigger
                  value="additional"
                  className="bg-white text-black py-3 rounded-none border border-gray-300 data-[state=active]:bg-white data-[state=inactive]:bg-gray-200"
                >
                  INFORMACION ADICCIONAL
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-0">
                <p className="text-[20px] leading-relaxed text-gray-700">
                  {product?.descripcion}
                </p>
              </TabsContent>
              <TabsContent value="additional" className="mt-0">
                <div className="text-[20px] text-gray-700">
                  Marca: {product?.marca?.nombre || "N/A"}
                  <br />
                  <span className="flex items-center gap-2">
                    Colores disponibles:
                    {product?.colores ? (
                      <ColorDisplay colors={product.colores} />
                    ) : (
                      " Solo un color disponible"
                    )}
                  </span>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Shipping and Service Information */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8H17V4H3C1.89 4 1 4.89 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5Z"
                  fill="#003366"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">
                En Barrancabermeja recibes tus pedidos en{" "}
                <span className="text-red-600">menos de 24 horas</span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                  fill="#003366"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">
                Tu compra es segura y nuestros métodos de pago son confiables.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7V4H5V7H2V20H22V7H19ZM5 20H4V8H5V20ZM19 20H6V8H19V20ZM20 20H19.5V8H20V20ZM9 12H15V10H9V12Z"
                  fill="#003366"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium">
                También puedes recoger en la tienda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
