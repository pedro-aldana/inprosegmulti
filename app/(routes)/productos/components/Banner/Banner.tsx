import BackgroundPaths from "@/components/kokonutui/background-paths";
import Image from "next/image";

export function Banner() {
  return (
    <section className="overflow-hidden bg-[url(/images/epp.webp)] bg-cover bg-top bg-no-repeat mb-10">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl text-center font-bold text-white sm:text-3xl md:text-5xl">
            PRODUCTOS
          </h2>
        </div>
      </div>
    </section>
  );
}
