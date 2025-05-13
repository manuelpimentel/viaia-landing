import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import NavBar from "@/components/navbar";
import MobileOnly from "@/components/MobileOnly";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileOnly>
      <div className="relative min-h-screen">
        <NavBar />
        <main className="pt-[64px]">{children}</main>
        <footer className="w-full bg-[#fcfcfc] dark:bg-[#1a1a1a] px-4 py-3 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Botones de contacto */}
            <div className="flex items-center gap-4">
              <a
                className="text-green-500 hover:text-green-700 text-3xl"
                href="https://wa.me/584248005957"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
              <a
                className="text-pink-500 hover:text-pink-700 text-3xl"
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
    </MobileOnly>
  );
}
