import React from "react";
import Image from "next/image";

export function Vision() {
  return (
    <div className=" py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#c2a110] mb-8">
              MISIÓN Y VISIÓN
            </h2>

            {/* Mission */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#c2a110]">MISIÓN</h3>
              <p className="text-gray-700 leading-relaxed">
                Somos una empresa líder en atender las necesidades y
                requerimientos de nuestros clientes, teniendo como objetivo
                fundamental la excelencia de nuestros productos y también de
                nuestros servicios para la seguridad industrial y todo lo
                referente a materiales utilizados en la industria y en la
                ingeniería, reconociendo como valores fundamentales la
                conservación y cuidado del ambiente, el respeto, la honestidad y
                la responsabilidad.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#c2a110]">VISIÓN</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la primera opción para el sector empresarial e industrial de
                la región en soluciones integrales en Seguridad Industrial,
                siendo reconocidos por el profesionalismo de nuestro equipo
                humano de trabajo y la calidad de nuestros productos, así como
                por nuestra contribución en la generación de ambientes laborales
                seguros, sanos y productivos.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <Image
              src="/images/aumento.avif"
              alt="Modern industrial facility representing our vision for the future"
              width={547}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
