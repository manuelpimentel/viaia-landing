import { Link } from "@heroui/link";

import NavBar from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <NavBar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-8">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1"
          href="https://github.com/frontio-ai/heroui"
        >
          Get in touch
        </Link>
      </footer>
    </div>
  );
}
