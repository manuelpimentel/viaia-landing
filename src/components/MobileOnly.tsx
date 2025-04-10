import { useEffect, useState } from "react";

export default function MobileOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // iPad mini width es 768px
  if (windowWidth <= 768) {
    return <>{children}</>;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#fcfcfc] dark:bg-[#1a1a1a]">
      <div className="max-w-md text-center p-8">
        <p className="text-8xl">🫥</p>
        <h1 className="text-3xl font-bold mb-4">
          ¡Ups! Esta página es solo para dispositivos móviles
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Por favor, accede desde tu teléfono móvil, para disfrutar de la mejor
          experiencia.
        </p>
      </div>
    </div>
  );
}
