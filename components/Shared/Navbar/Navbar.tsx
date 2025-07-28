"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, ChevronDown, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DropdownItem {
  href: string;
  label: string;
  description?: string;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    idle: { scale: 1, opacity: 0.7 },
    hover: {
      scale: 1.05,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const logoVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
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

  const staggerItem = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header
      className="w-full  bg-[#0a0a08] text-white relative
       z-50"
      initial="hidden"
      animate="visible"
    >
      <div className="flex h-24 w-full items-center justify-between ">
        <motion.div
          initial="idle"
          whileHover="hover"
          className="bg-white h-full px-8 py-2 flex items-center "
        >
          <Link href="/" className="flex items-center">
            <MagnexLogo />
          </Link>
        </motion.div>

        <motion.nav
          className="hidden items-center space-x-8 md:flex"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div>
            <motion.div
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-xl font-medium  ">
                Inicio
              </Link>
            </motion.div>
          </motion.div>

          <motion.div>
            <motion.div
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/nosotros" className="text-xl font-medium ">
                Nosotros
              </Link>
            </motion.div>
          </motion.div>
          <motion.div>
            <motion.div
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/productos" className="text-xl font-medium ">
                Productos
              </Link>
            </motion.div>
          </motion.div>

          {/* Servicios Dropdown */}

          {/* Industrias Dropdown */}

          <motion.div>
            <motion.div
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/nuestra-sede"
                className="text-xl font-medium opacity-70 hover:opacity-100"
              >
                Nuestra sede
              </Link>
            </motion.div>
          </motion.div>

          <motion.div>
            <motion.div
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contacto"
                className="text-xl font-medium opacity-70 hover:opacity-100"
              >
                Contacto
              </Link>
            </motion.div>
          </motion.div>
        </motion.nav>

        <div className="flex items-center space-x-1">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div
                variants={buttonVariants}
                initial="idle"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  size="icon"
                  className="bg-[#0b0b0a] text-white hover:bg-[#0e0e0ec1] -ml-12"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5 " />
                  </motion.div>
                  <span className="sr-only">Menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <AnimatePresence>
              {isOpen && (
                <SheetContent
                  side="right"
                  className="bg-[#0a0a09cf] text-white border-l border-white/10"
                >
                  {/* Mobile Navigation */}
                  <DialogTitle className="sr-only">
                    Menú de navegación
                  </DialogTitle>
                  <motion.nav
                    className="flex flex-col space-y-6 pt-10 ml-12 md:hidden"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <Link
                      href="/"
                      className="text-xl font-medium hover:opacity-100"
                    >
                      Inicio
                    </Link>
                    <Link
                      href="/nosotros"
                      className="text-xl font-medium hover:opacity-100"
                    >
                      Nosotros
                    </Link>
                    <Link
                      href="/productos"
                      className="text-xl font-medium hover:opacity-100"
                    >
                      Productos
                    </Link>
                    <Link
                      href="/nuestra-sede"
                      className="text-xl font-medium hover:opacity-100"
                    >
                      Nuestra sede
                    </Link>
                    <Link
                      href="/contacto"
                      className="text-xl font-medium hover:opacity-100"
                    >
                      Contacto
                    </Link>
                  </motion.nav>

                  {/* Desktop Contact Info */}
                  <motion.div
                    className="hidden md:block pt-10 ml-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <h2 className="text-2xl font-bold mb-4">Contacto</h2>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                      Nuestra grandeza y experiencia nos impulsan; seguimos
                      creciendo y siempre estamos en movimiento hacia nuevas
                      metas.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" />
                        <div className="text-gray-300">
                          <p>Cra. 18 #47-75, Barrancabermeja, Santander</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        <p className="text-gray-300">+57 3044695115</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-gray-300 flex-shrink-0" />
                        <p className="text-gray-300">+57 3244663618</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" />
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
        </div>
      </div>
    </motion.header>
  );
}

function MagnexLogo() {
  return (
    <div className="flex items-center">
      <motion.span
        className="text-xl font-bold tracking-tight"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src="/images/logo.png"
          alt="R.A.C Logo"
          width={200}
          height={150}
        />
      </motion.span>
    </div>
  );
}
