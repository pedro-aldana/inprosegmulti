import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Services() {
  const whatsappNumber = "+573044695115"; // Replace with your actual WhatsApp number
  const whatsappMessage =
    "¡Hola! Me gustaria conocer mas sobre la fabricacion de overoles.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/confeccion.webp"
          alt="Magnex worker in safety gear"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-wide">
          SOMOS FABRICANTES DE OVEROLES INDUSTRIALES
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-12 max-w-5xl mx-auto font-light">
          En Inproseg, fabricamos overoles industriales de alta calidad,
          incluyendo modelos ignífugos diseñados para brindar{" "}
          <span className="text-yellow-300">
            {" "}
            protección contra arco eléctrico y fuego repentino.
          </span>{" "}
          En Nuestros overoles en dril e ignífugos cumplen con exigentes
          estándares de seguridad,{" "}
          <span className="text-yellow-300">
            ofreciendo resistencia, durabilidad y comodidad para entornos de
            alto riesgo en la industria.
          </span>{" "}
        </p>

        <Button
          className="bg-[#c2a110] hover:bg-[#fac11d] cursor-pointer text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors duration-200"
          size="lg"
        >
          <a href={whatsappUrl}>Conocer más</a>
        </Button>
      </div>
    </section>
  );
}
