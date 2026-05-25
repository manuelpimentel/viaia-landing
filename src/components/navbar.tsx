import { Link, Button } from "@heroui/react";
import posthog from "posthog-js";

export const ViaiaLogo = () => (
  <img alt="Logo" height={36} src="/Vector-1.png" width={36} />
);

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[16px] min-[900px]:px-[48px] h-[56px] min-[900px]:h-[64px] bg-[rgba(252,252,252,0.95)] backdrop-blur-[12px] border-b border-[rgba(0,122,138,0.1)] transition-all">
      <Link href="/" className="flex items-center gap-[10px] cursor-pointer">
        <ViaiaLogo />
      </Link>
      <div className="flex items-center gap-[12px]">
        <Button
          as={Link}
          className="px-[20px] py-[8px] rounded-full border-[1.5px] border-[#8C7D6A] bg-transparent text-[#4A4035] hover:border-[#1C1812] hover:text-[#1C1812] font-medium text-[14px] transition-colors"
          href="https://wa.me/13075001620"
          rel="noopener noreferrer"
          target="_blank"
          onPress={() => {
            posthog.capture("button_clicked", { property: "to_app" });
          }}
        >
          Contáctanos
        </Button>
      </div>
    </nav>
  );
}
