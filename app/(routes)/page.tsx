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
    subtitle: "Compra EPPs con asesoría experta y atención personalizada",
    title: "Tu seguridad es nuestro negocio",
    description:
      "Nos dedicamos a proteger a quienes mueven al mundo. Te ayudamos a encontrar los equipos adecuados para tu industria, garantizando calidad, cumplimiento normativo y entregas puntuales.",
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
