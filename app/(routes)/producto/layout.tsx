// app/productos/layout.tsx (o page.tsx)
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producto",
  description: "producto de INPROSEG",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
