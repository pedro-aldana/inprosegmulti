import { MapPin, Phone, Mail, X } from "lucide-react";

export function ContactModal() {
  return (
    <div className="absolute right-0 mt-0 w-96 bg-slate-800 text-white shadow-xl z-50 animate-fadeIn">
      <div className="p-8 w-full max-w-md">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Contacto</h1>
          <p className="text-slate-300 leading-relaxed">
            Nuestra grandeza y experiencia nos impulsan; seguimos creciendo y
            siempre estamos en movimiento hacia nuevas metas.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Address 1 */}
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-slate-300 mt-1 flex-shrink-0" />
            <div className="text-slate-300">
              <p>Carrera 7 # 156-10 Piso 25 Edificio</p>
              <p>North Point Torre Krystal Bogotá,</p>
              <p>Colombia</p>
            </div>
          </div>

          {/* Address 2 */}
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-slate-300 mt-1 flex-shrink-0" />
            <div className="text-slate-300">
              <p>Avenida Juan de Arona 151, Of. 705</p>
              <p>San Isidro Lima, Perú</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="h-5 w-5 text-slate-300 flex-shrink-0" />
            <p className="text-slate-300">+57 (601)5169696</p>
          </div>

          {/* Emails */}
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-slate-300 mt-1 flex-shrink-0" />
            <div className="text-slate-300">
              <p>info.comercial@magnexgroup.com</p>
              <p>comercial.peru@magnexgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
