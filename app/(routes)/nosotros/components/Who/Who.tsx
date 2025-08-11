import React from "react";
import Image from "next/image";

export function Who() {
  return (
    <div className=" py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <Image
              src="/images/juntos.jpg"
              alt="Team of four engineers in blue uniforms and hard hats giving thumbs up at an industrial site"
              width={547}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#c2a110] mb-6">
              ¿QUIÉNES SOMOS?
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                En INPROSEG, nos especializamos en el suministro de productos y
                elementos de seguridad, y dotación para el sector industrial,
                entre otros, con presencia en Barrancabermeja y cobertura a
                nivel nacional. Desde nuestra fundación en el año 2021, hemos
                trabajado con un firme compromiso hacia la calidad, garantizando
                soluciones que cumplen con los estándares y normativas vigentes.
                Nuestro enfoque se basa en ofrecer productos confiables y un
                servicio ágil y eficiente, asegurando la satisfacción de
                nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
