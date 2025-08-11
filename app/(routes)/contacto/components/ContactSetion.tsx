"use client";

import React from "react";
import { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface Advisor {
  id: number;
  name: string;
  phone: string;
  email: string;
  photo: string;
  specialty?: string;
}

const advisors: Advisor[] = [
  {
    id: 1,
    name: "Luz Quiñones",
    phone: "3021247235",
    email: "auxventasinprosegsas@gmail.com",
    photo: "https://via.placeholder.com/150/4F46E5/FFFFFF?text=SJ",
    specialty: "Asesora Comercial",
  },
  {
    id: 2,
    name: "Alvaro Aguilar",
    phone: "3008260891",
    email: "comercial.inproseg01@gmail.com",
    photo: "https://via.placeholder.com/150/059669/FFFFFF?text=MC",
    specialty: "Asesor Comercial",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const whatsappNumber = "+573044695115"; // Replace with your actual WhatsApp number
  const whatsappMessage = "¡Hola! Estoy interesado en sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-200 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ponerse en contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contáctenos hoy y discutamos cómo Podemos ayudarlo
          </p>
        </div>

        {/* Direct Contact Section */}
        <div className="grid lg:grid-cols-1 gap-12 mb-20">
          {/* Contact Form */}

          {/* Quick Contact Options */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contacto rápido
              </h3>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg mb-4"
              >
                <FaWhatsapp className="text-2xl mr-4" />
                <div className="text-left">
                  <div className="font-bold">Chat en WhatsApp</div>
                  <div className="text-sm opacity-90">
                    Obtener respuestas instantáneas
                  </div>
                </div>
              </a>

              {/* Direct Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaPhone className="text-blue-600 text-xl mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Telefono</div>
                    <a
                      href={`tel:${whatsappNumber}`}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaEnvelope className="text-blue-600 text-xl mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a
                      href="inprosegmulti@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      inprosegmulti@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">Oficinas</div>
                    <div className="text-gray-600">
                      Cra. 18 #47-75
                      <br />
                      Barrancabermeja, Santander
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Cards Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros asesores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify">
              Nuestros asesores experimentados están aquí para ayudarlo en cada
              paso . Póngase en contacto con el especialista adecuado para sus
              necesidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                <div className="text-center mb-6">
                  <img
                    src={advisor.photo || "/placeholder.svg"}
                    alt={advisor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-100"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {advisor.name}
                  </h4>
                  {advisor.specialty && (
                    <p className="text-blue-600 font-medium text-sm">
                      {advisor.specialty}
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${advisor.phone}`}
                    className="flex items-center w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group"
                  >
                    <FaPhone className="text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium">
                      {advisor.phone}
                    </span>
                  </a>

                  <a
                    href={`mailto:${advisor.email}`}
                    className="flex items-center w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
                  >
                    <FaEnvelope className="text-gray-600 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium text-sm">
                      {advisor.email}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
