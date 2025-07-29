// app/productos/layout.tsx (o page.tsx)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Seccion de Nosotros de la empresa INPROSEG, dedicada a la seguridad industrial",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
