import React from "react";
import { Shield, Handshake, Recycle, Lightbulb, Target } from "lucide-react";

export function Values() {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#c2a110] mb-6">VALORES</h2>
          <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Los valores nos permiten orientar nuestro comportamiento en cada rol
            dentro de la compañía. Basar nuestro trabajo diario en estos
            valores, nos permite proporcionar soluciones integrales de alta
            calidad a nuestros clientes, en un entorno laboral gratificante. En
            nuestra compañía, todo lo que hacemos se rige por los siguientes
            valores:
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Seguridad Siempre */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border-b-4 border-black">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-[#c2a110] rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">SEGURIDAD</h3>
            <p className="text-sm text-[#c2a110] font-medium mb-4">SIEMPRE</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Promovemos un ambiente de trabajo seguro, donde nos cuidamos,
              cuidamos a los demás y siempre predeceamos la vida.
            </p>
          </div>

          {/* Integridad */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border-b-4 border-black">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-[#c2a110] rounded-full flex items-center justify-center">
                <Handshake className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">INTEGRIDAD</h3>
            <p className="text-sm text-[#c2a110] font-medium mb-4">
              SIN CONCESIONES
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Actuamos con ética y transparencia en todo momento.
            </p>
          </div>

          {/* Desarrollo Sostenible */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border-b-4 border-black">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-[#c2a110] rounded-full flex items-center justify-center">
                <Recycle className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">DESARROLLO</h3>
            <p className="text-sm text-[#c2a110] font-medium mb-4">
              SOSTENIBLE
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fomentamos el desarrollo de nuestra gente y todos nuestros grupos
              de interés.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Innovación */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border-b-4 border-black">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-[#c2a110] rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">INNOVACIÓN</h3>
            <p className="text-sm text-[#c2a110] font-medium mb-4">
              QUE DINAMIZA
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Retamos la manera de hacer las cosas, respondiendo ágilmente a los
              desafíos.
            </p>
          </div>

          {/* Foco en el Negocio */}
          <div className="bg-white rounded-lg p-8 text-center shadow-sm border-b-4 border-black">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-[#c2a110] rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">FOCO EN EL</h3>
            <p className="text-sm text-[#c2a110] font-medium mb-4">NEGOCIO</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Generamos valor a nuestros clientes y cumplimos nuestros
              compromisos contractuales, siempre enfocados en impactar
              positivamente en su negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
