import { Link } from "@heroui/link";

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
        <footer className="w-full flex items-center justify-center py-5 flex-col">
          <div className="flex gap-3">
            <Link
              isExternal
              className="bg-[#007A8A] text-white hover:bg-[#007A8A]/90 rounded-full shadow-lg px-4 py-2 transition-all"
              href="https://wa.me/584248005957"
            >
              Comunicate con nosotros
            </Link>
          </div>
          <div className="text-center text-xs text-gray-500 mt-8">
            © 2025 Viaia LLC. Compañía registrada. Todos los derechos
            reservados.
          </div>
        </footer>
      </div>
    </MobileOnly>
  );
}
