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
        <main className="pt-[64px]">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link
            isExternal
            className="flex items-center gap-1 text-[#5C0087]"
            href="https://wa.me/584248005957">
            Comunicate con nosotros
          </Link>
        </footer>
      </div>
    </MobileOnly>
  );
}
