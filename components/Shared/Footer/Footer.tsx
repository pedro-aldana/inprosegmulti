"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      className="bg-[#0a0a08] text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Conoce más */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4">Conoce más</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/nosotros" className="hover:underline">
                Nosotros
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
          <div className="mt-6 flex items-center">
            <span className="text-lg font-bold">+57 3044695115</span>
            <Image
              src="/images/what.png"
              alt="WhatsApp"
              width={40}
              height={40}
              className="ml-2"
            />
          </div>
        </motion.div>

        {/* Center Column - Company Info */}
        <motion.div
          className="text-center flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="mb-4">
            <Image
              src="/images/logo.png"
              alt="R.A.C Logo"
              width={140}
              height={140}
              className="mx-auto"
            />
            <h2 className="text-[#c2a110] font-bold text-xl mt-2">
              INGENIERIA PROTECCION SEGURIDAD <br /> Y MULTISERVICIOS S.A.S
            </h2>
          </div>

          <p className="mt-4">
            INPROSEG ES UNA EMPRESA{" "}
            <span className="font-bold">FUNDADA EN EL AÑO 2021</span>,
            DEDICANDONOS A LA <span className="font-bold">ESPECIALIZADA </span>
            EN LA DISTRIBUCION DE PRODUCTOS DE SEGURIDAD Y DOTACION{" "}
            <span className="font-bold">PARA EL SECTOR INDUSTRIAL</span> CON
            SEDE EN BARRANCABERMEJA Y COBERTURA A NIVEL NACIONAL
          </p>
        </motion.div>

        {/* Right Column - Sedes */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4">Sedes</h2>
          <div className="mb-6">
            <h3 className="font-bold">SEDE BARRANCABERMEJA:</h3>
            <p>Cel: 3044695115</p>
            <p>Cra. 18 #47-75, Barrancabermeja, Santander</p>
          </div>

          <div>
            <h3 className="font-bold">HORARIOS:</h3>
            <p>Lunes a Viernes de 7:30 a.m - 12 p.m, 2-6 p.m.</p>
            <p>Sábados de 8:00 a.m a 12.30pm</p>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-gray-300 py-4 text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        © Copyright 2025 | Todos los derechos reservados | Hecho por MDTEC Code
      </motion.div>
    </motion.footer>
  );
}
