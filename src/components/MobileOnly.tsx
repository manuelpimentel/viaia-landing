import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, Button } from "@heroui/react";

import { PricingTiers } from "./pricing";
import ComparisonSection from "./ComparisonSection";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";

const textsVelocity = [
  "Alojamientos Experiencias Actividades Transporte Organización",
  "Restaurantes Bares Consejos Cultura Turismo Aventura",
];

const textsRotating = [
  "Atención 24/7",
  "Ten un perfil web profesional",
  "Cómo atiendes a tus clientes",
  "Cómo te descubren",
  "Control total de lo que ofreces",
  "Tus reservas",
  "Atención multilenguaje",
  "Productos listos para mostrar",
  "Tu tiempo",
];

export default function MobileOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth <= 768) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      {/* Navbar sticky */}
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img alt="Logo Viaia" className="w-14" src="/Vector-4.png" />
          <Button
            as={Link}
            className="text-[#007A8A] border-[#007A8A] hover:text-white"
            href="https://wa.me/13075001620"
            rel="noopener noreferrer"
            target="_blank"
            variant="bordered"
          >
            Contáctanos
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 mt-72">
        <div className="max-w-5xl mx-auto text-center">
          <SplitText
            className="text-9xl font-bold"
            delay={50}
            text="¡Hola, servicio!"
          />
          <div className="mt-40 animate-bounce">
            <svg
              className="w-12 h-12 mx-auto text-[#007A8A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <GradientText
            animationSpeed={10}
            className="text-4xl md:text-5xl font-bold mb-6 mt-10"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
          >
            ¿Alguna vez perdiste un cliente por una respuesta lenta o confusa?
          </GradientText>
          <p className="text-2xl text-gray-700 mt-6">
            <b>Viaia</b> organiza tu información para que no vuelva a pasar.
          </p>
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 items-center">
            {/* QR animado */}
            <div className="relative w-72 h-72 rounded-xl p-1 bg-gradient-to-r from-[#FF6200] via-[#8A0087] to-[#5C0087] animate-pulse-slow hover:scale-105 transition-transform duration-500">
              <img
                alt="QR App"
                className="w-full h-full rounded-lg shadow-2xl object-cover"
                src="/viaia-qrfrontdesk.png"
              />
              {/* Pequeño brillo animado */}
              <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-white/20 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
              <p className="font-semibold text-gray-500 mt-5">
                Escanea y prueba
              </p>
            </div>

            {/* Separador vertical */}
            <div className="h-40 w-[1px] bg-gray-200 hidden md:block" />

            {/* Texto atrevido */}
            <div className="text-center md:text-left max-w-md">
              <h3 className="text-2xl font-bold mb-2">
                ¿Te atreves a vivir una experiencia de atención única? ✨
              </h3>
              <p className="text-gray-500 text-lg">
                Con <b>Viaia</b>, tus clientes reciben respuestas inmediatas y
                profesionales, mientras tú disfrutas de tranquilidad y control
                total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Conversación */}
      <section className="bg-purple-50 py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <GradientText
              animationSpeed={10}
              className="text-5xl font-bold"
              colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
            >
              Todo empieza con una conversación clara
            </GradientText>
            <p className="text-2xl text-gray-600">
              Tus clientes preguntan, <b>Viaia</b> responde al instante.
              Disponible siempre, incluso cuando tú no estás.
            </p>
            <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
              <p className="font-bold text-neutral-500 mb-4">
                Ejemplos de preguntas:
              </p>
              <ul className="space-y-4 text-xl">
                <li>💬 ¿Qué incluye este servicio?</li>
                <li>📅 ¿Tienen disponibilidad para esta fecha?</li>
                <li>💰 ¿Cuánto cuesta y qué formas de pago hay?</li>
                <li>📍 ¿Dónde están ubicados?</li>
                <li>🕒 ¿Cuánto dura la experiencia?</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <FadeContent>
              <img
                alt="Detail"
                className="w-full max-w-2xl mx-auto rounded-3xl"
                src="/DETAIL.png"
              />
            </FadeContent>
          </div>
        </div>
      </section>

      {/* =======================
   Primer paso: Activa tu asistente operativo
======================= */}
      <section className="bg-orange-50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <GradientText
            animationSpeed={10}
            className="text-5xl font-bold mb-6"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
          >
            El primer paso para optimizar tu atención
          </GradientText>

          <p className="text-2xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Escanea el QR y conversemos. Te acompañamos en el primer paso hacia
            una atención más clara y eficiente.
          </p>

          {/* QR / Entrada a la conversación */}
          <div className="flex justify-center">
            <AnimatedContent>
              <div className="relative w-72 h-72 rounded-2xl p-1 bg-gradient-to-r from-[#FF6200] via-[#8A0087] to-[#5C0087] hover:scale-105 transition-transform duration-500">
                {/* Glow suave */}
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 bg-gradient-to-r from-[#FF6200] via-[#8A0087] to-[#5C0087]" />

                <img
                  alt="Escanea y comienza con Viaia"
                  className="relative z-10 w-full h-full rounded-xl shadow-2xl object-cover"
                  src="/WABAFrame.jpeg"
                />
              </div>
            </AnimatedContent>
          </div>

          {/* Microcopy de acción */}
          <p className="mt-8 text-lg text-gray-600">
            📲 Comienza a mejorar tu atención ahora
          </p>
        </div>
      </section>

      {/* =======================
     Segundo paso: Siempre al alcance
======================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          {/* Imagen Dashboard */}
          <div className="lg:w-1/2">
            <AnimatedContent>
              <img
                alt="Dashboard"
                className="w-full rounded-2xl shadow-2xl border border-gray-100 hover:scale-105 transition-transform duration-500"
                src="/dash.png"
              />
            </AnimatedContent>
          </div>

          {/* Texto */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <GradientText
              animationSpeed={10}
              className="text-5xl font-bold mb-4"
              colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
            >
              Mantén tu servicio siempre al alcance
            </GradientText>
            <p className="text-2xl text-gray-600">
              Tu servicio listo, claro y profesional, sin perder tiempo ni
              clientes. Lo que empezó como un primer paso, ahora es tu operación
              en acción. ⚡️
            </p>
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 items-center">
              <div className="relative w-72 h-72 mt-10 rounded-xl p-1 bg-gradient-to-r from-[#FF6200] via-[#8A0087] to-[#5C0087] animate-pulse-slow hover:scale-105 transition-transform duration-500">
                <img
                  alt="QR App"
                  className="w-full h-full rounded-lg shadow-2xl object-cover"
                  src="/viaia-qrperfil.png"
                />
                {/* Pequeño brillo animado */}
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-white/20 opacity-0 hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                <p className="font-semibold text-gray-500 mt-5 text-center">
                  Escanea y descubre
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Velocity Scroll Section */}
      <div className="py-12 border-y border-gray-100">
        <ScrollVelocity
          className="text-7xl font-bold text-gray-800"
          texts={textsVelocity}
          velocity={50}
        />
      </div>

      {/* Comparison Section */}
      <div className="p-20">
        <ComparisonSection />
      </div>

      {/* Final CTA & Rotating Text */}
      <section className="p-6 text-center bg-gray-50">
        <h2 className="text-5xl font-bold mb-10 text-gray-800">
          Optimiza todo lo que tu servicio ofrece 🛎️
        </h2>
        <div className="h-32 flex justify-center items-center">
          <RotatingText
            animate={{ y: 0 }}
            className="px-3 sm:px-4 md:px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg tracking-wide"
            exit={{ y: "-120%" }}
            initial={{ y: "100%" }}
            rotationInterval={3500} // más lento
            splitLevelClassName="inline-flex mr-1 overflow-hidden justify-center items-center"
            staggerDuration={0.025}
            staggerFrom="last"
            texts={textsRotating}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          />
        </div>
      </section>

      <PricingTiers />

      {/* Footer */}
      <footer className="w-full bg-white px-8 py-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <img
            alt="Logo Viaia"
            className="w-10 mb-4 md:mb-0"
            src="/Vector-4.png"
          />
          <div className="flex gap-6">
            <a
              aria-label="WhatsApp"
              className="text-3xl text-green-500 hover:scale-110 transition-transform"
              href="https://wa.me/13075001620"
            >
              <FaWhatsapp />
            </a>
            <a
              aria-label="Instagram"
              className="text-3xl text-pink-500 hover:scale-110 transition-transform"
              href="https://www.instagram.com/esviaia/"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            &copy; 2025 Viaia LLC. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
