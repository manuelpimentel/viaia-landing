import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

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
    <div className="flex flex-col h-screen overflow-auto lg:overflow-hidden">
      {/* Navbar Fijo */}
      <div className="sticky top-0 w-full bg-[#fcfcfc] dark:bg-[#1a1a1a] z-10">
        <div className="max-w-md mx-auto text-center py-4">
          <img alt="Logo Viaia" className="mx-auto w-16" src="/Vector-4.png" />
        </div>
      </div>

      {/* Contenido principal - Contenedor flexible */}
      <div className="flex-1 flex flex-col bg-[#fcfcfc]">
        {/* Título */}
        <img alt="Viaia" className="mx-auto w-48 pt-10" src="/Vector-2.png" />
        <div className="text-center px-6 sm:px-10 md:px-20 pb-8 pt-4">
          <GradientText
            animationSpeed={10}
            className="custom-class text-4xl sm:text-5xl md:text-6xl"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
            showBorder={false}
          >
            La primera IA de turismo en Venezuela
          </GradientText>
        </div>

        {/* Sección Dividida - Usa flex-1 para ocupar espacio disponible */}
        <div className="flex flex-col lg:flex-row items-center justify-center p-6 sm:p-0 lg:px-6 gap-8 lg: flex-1">
          {/* Columna izquierda (Imagen) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-4 lg:mb-0 lg:pr-4">
            <img
              alt="Imagen"
              className="max-h-[20rem] sm:max-h-[24rem] md:max-h-[28rem] lg:max-h-[38rem] w-auto object-contain"
              src="/grupete.png"
            />
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col items-center w-full lg:w-1/2 text-center lg:text-left lg:items-start lg:pl-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Tu nueva compañera de viaje
            </h2>
            <p className="text-gray-600 text-base sm:text-xl md:text-2xl lg:text-3xl dark:text-gray-400 mb-4 lg:mb-8">
              Explora Venezuela con <strong>Viaia</strong>.<br /> Escanea el
              código y comienza tu viaje.
            </p>
            <div className="w-full flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 lg:gap-6">
              {/* Primer QR */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 flex items-center justify-center">
                  <img
                    alt="Código QR"
                    className="w-full h-full object-contain"
                    src="/frame.png"
                  />
                </div>
                <p className="mt-2 text-center text-sm lg:text-base">
                  Aplicación web
                </p>
              </div>
              {/* Segundo QR */}
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 flex items-center justify-center">
                  <img
                    alt="Código QR"
                    className="w-full h-full object-contain"
                    src="/frame2.png"
                  />
                </div>
                <p className="mt-2 text-center text-sm lg:text-base">
                  Descubre Viaia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#fcfcfc] dark:bg-[#1a1a1a] px-4 py-3 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Botones de contacto */}
          <div className="flex items-center gap-4">
            <a
              className="text-green-500 hover:text-green-700 text-3xl transition-colors duration-300"
              href="https://wa.me/584248005957"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              className="text-pink-500 hover:text-pink-700 text-3xl transition-colors duration-300"
              href="https://www.instagram.com/esviaia/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Derechos reservados */}
          <div className="text-xs text-gray-500">
            © 2025 <strong>Viaia LLC</strong>. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
