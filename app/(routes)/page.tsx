import {
  BrandCarrousel,
  Categories,
  FeaturedProducts,
  Hero,
  Services,
} from "./components";
import Who from "./components/Who/Who";

// Define the Slide type
type Slide = {
  image: string;
  subtitle: string;
  title: string;
  description: string;
};

const heroSlides: Slide[] = [
  {
    image: "/images/proteccion.jpg",
    subtitle: "Equipos de Protección Personal certificados para cada industria",
    title: "Protección que trabaja contigo",
    description:
      "Somos tu aliado confiable en la compra y venta de EPPs. Brindamos soluciones seguras, cómodas y eficientes para proteger a tus trabajadores y cumplir con los más altos estándares de seguridad industrial.",
  },
  {
    image: "/images/pasion.jpg",
    subtitle: "NUESTRA PROPUESTA COMBINA UNA",
    title: "PASION INQUEBRANTABLE",
    description:
      "Para ofrecer lo mejor a nuestros clientes con un enfoque en la innovación y la excelencia.",
  },
];

export default function Home() {
  return (
    <div>
      <Hero slides={heroSlides} />
      <Who />
      <Services />
      <BrandCarrousel />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}
