import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Banner } from "./components/Banner";

export default function LocationPage() {
  return (
    <>
      <Banner />
      <div className="bg-white mt-12 lg:mt-12 mb-6">
        <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Left Section - Map and Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Map Container - Más compacto */}
            <div className="relative w-full h-48 md:h-64">
              {" "}
              {/* Reducido de h-64/h-96 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.511770178789!2d-73.85872292501412!3d7.065070992943854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e42efb5e1fdb4a9%3A0x4d1e4d9e3a8e5d1f!2sCra.%2018%20%2347-75%2C%20Barrancabermeja%2C%20Santander!5e0!3m2!1sen!2sco!4v1712670000000!5m2!1sen!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
              {/* Map Controls - Versión simplificada */}
              <div className="absolute bottom-1 left-1 right-1 flex justify-between text-[10px] text-gray-600">
                <div>Mapas</div>
                <div>©2023 Google</div>
                <div>Términos</div>
              </div>
            </div>

            {/* Contact Information - Más compacto */}
            <div className="p-4 md:p-5 flex flex-col gap-2">
              {" "}
              {/* Reducido de p-6 */}
              <h1 className="text-xl md:text-2xl font-bold text-center text-[#c2a110]">
                SEDE
              </h1>
              <div className="flex items-center gap-2 mt-2">
                <Phone className="text-[#c2a110] h-4 w-4" />
                <span className="text-gray-700 text-sm">Cel: 3044695115</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-[#c2a110] h-4 w-4" />
                <span className="text-gray-700 text-sm">
                  Cra. 18 #47-75, Barrancabermeja, Santander
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Store Image - Más compacto */}
          <div className="w-full md:w-1/2 h-48 md:h-64 relative">
            {" "}
            {/* Reducido de h-64/h-auto */}
            <Image
              src="/images/inpro.png"
              alt="Sede Norte - Storefront"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
