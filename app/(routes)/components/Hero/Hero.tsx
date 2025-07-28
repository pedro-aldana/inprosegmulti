"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

interface HeroCarouselProps {
  slides: Slide[];
}

export function Hero({ slides }: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0 z-[-1]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="container mx-auto px-6 lg:px-8">
                  <div className="max-w-4xl">
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <motion.div
                          key={index}
                          variants={staggerContainer}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="space-y-6"
                        >
                          {/* Subtitle */}
                          <motion.p className="text-sm uppercase tracking-wider text-white/80 md:text-base">
                            {slide.subtitle}
                          </motion.p>

                          {/* Title */}
                          <motion.h1 className="text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
                            {slide.title}
                          </motion.h1>

                          {/* Description */}
                          <motion.p className="max-w-2xl text-sm leading-relaxed text-white/90 md:text-base lg:text-lg">
                            {slide.description}
                          </motion.p>

                          {/* CTA Buttons */}
                          {(slide.ctaPrimary || slide.ctaSecondary) && (
                            <motion.div className="flex mb-16 flex-col gap-4 pt-4 sm:flex-row">
                              {slide.ctaPrimary && (
                                <Link
                                  href={slide.ctaPrimary.href}
                                  className="inline-flex items-center justify-center rounded bg-[#00adef] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0096c7] focus:outline-none focus:ring-2 focus:ring-[#00adef] focus:ring-offset-2"
                                >
                                  {slide.ctaPrimary.label}
                                </Link>
                              )}
                              {slide.ctaSecondary && (
                                <Link
                                  href={slide.ctaSecondary.href}
                                  className="inline-flex items-center justify-center rounded bg-[#0b2c48] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#093048] focus:outline-none focus:ring-2 focus:ring-[#0b2c48] focus:ring-offset-2"
                                >
                                  {slide.ctaSecondary.label}
                                </Link>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-6 z-20 flex gap-2 ">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
          className="flex  h-12 w-12 items-center justify-center rounded-lg bg-white shadow-lg transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20"
        >
          <ChevronLeft className="h-5 w-5 text-gray-800" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-lg transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20"
        >
          <ChevronRight className="h-5 w-5 text-gray-800" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full transition-all ${
              activeIndex === index
                ? "bg-[#c2a110] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
