"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";

const buttonVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function MenuSheetToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Desktop button inside navbar */}
      <SheetTrigger asChild>
        <motion.div
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          className="hidden md:flex"
        >
          <Button
            size="icon"
            className="bg-[#0b0b0a] text-white hover:bg-[#0e0e0ec1]"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
      </SheetTrigger>

      {/* Mobile floating button */}
      <SheetTrigger asChild>
        <motion.div
          variants={buttonVariants}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="fixed bottom-6 right-6 z-50 md:hidden"
        >
          <Button
            size="icon"
            className="bg-[#0b0b0a] text-white hover:bg-[#0e0e0ec1] rounded-full shadow-lg"
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
            <span className="sr-only">Menú</span>
          </Button>
        </motion.div>
      </SheetTrigger>

      <AnimatePresence>
        {isOpen && (
          <SheetContent
            side="right"
            className="bg-[#0a0a09cf] text-white border-l border-white/10"
          >
            <DialogTitle className="sr-only">Menú de navegación</DialogTitle>

            <motion.nav
              className="flex flex-col space-y-6 pt-10 ml-12 md:hidden"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {[
                { href: "/", label: "Inicio" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/productos", label: "Productos" },
                { href: "/nuestra-sede", label: "Nuestra sede" },
                { href: "/contacto", label: "Contacto" },
              ].map(({ href, label }) => (
                <div
                  key={label}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-medium hover:opacity-100 cursor-pointer"
                >
                  <Link href={href}>{label}</Link>
                </div>
              ))}
            </motion.nav>

            <motion.div
              className="hidden md:block pt-10 ml-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Nuestra grandeza y experiencia nos impulsan; seguimos creciendo
                y siempre estamos en movimiento hacia nuevas metas.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Cra. 18 #47-75, Barrancabermeja, Santander</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-300" />
                  <p className="text-gray-300">+57 3044695115</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-300" />
                  <p className="text-gray-300">+57 3244663618</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-300 mt-1" />
                  <div className="text-gray-300 space-y-1">
                    <p>inprosegmulti@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </SheetContent>
        )}
      </AnimatePresence>
    </Sheet>
  );
}
