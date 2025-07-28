import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/types/product";
import Link from "next/link";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProductCard({ product }: { product: ProductType }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        transition: { duration: 0.3 },
      }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative">
          <motion.img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${
              product.imagen?.url || ""
            }`}
            alt={product.nombre}
            className="w-full h-64 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          {product.marca && product.marca.nombre && (
            <Badge className="absolute top-3 right-3 bg-primary text-white">
              Marca: {product.marca.nombre}
            </Badge>
          )}
        </div>
        <CardContent className="pt-6 flex-grow">
          <h3 className="text-lg font-semibold mb-2">{product.nombre}</h3>
        </CardContent>
        <CardFooter className="pt-0">
          <Button className="w-full cursor-pointer">
            <Link href={`/producto/${product.slug}`}>VER PRODUCTO</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
