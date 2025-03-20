import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";

import { Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full " justify="center">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-center items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
          </Link>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
