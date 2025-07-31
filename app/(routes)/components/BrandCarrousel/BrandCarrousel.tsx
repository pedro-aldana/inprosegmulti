/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const logos = [
  "/images/brands/3m.png",
  "/images/brands/armadura.jpg",
  "/images/brands/boyuan.jpg",
  "/images/brands/libus.png",
  "/images/brands/mcr.png",
  "/images/brands/robusta.webp",
  "/images/brands/saga.png",
  "/images/brands/steelpro.webp",
  "/images/brands/westland.png",
];

export function BrandCarrousel() {
  const sliderRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className={cn(
        "relative w-full bg-[#ffffff]  py-36 px-6 overflow-hidden "
      )}
    >
      <h1 className="text-center text-3xl font-bold text-[#ecc30d] mb-10">
        MARCAS ALIADAS
      </h1>

      <div className="relative overflow-hidden w-full">
        {/* Bordes con desvanecimiento */}
        <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent pointer-events-none" />

        <motion.div
          ref={sliderRef}
          className="flex w-max animate-marquee gap-12"
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Método de pago"
              className=" h-20 object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
