import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import posthog from "posthog-js";

export const ViaiaLogo = () => (
  <img alt="Logo" height={36} src="/Vector-1.png" width={36} />
);

export default function NavBar() {
  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-[9999] bg-[#ffffff]/70 backdrop-blur-md backdrop-saturate-150"
      isBlurred={true}
      maxWidth="full"
      position="static"
    >
      <NavbarBrand>
        <ViaiaLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            onPress={() => {
              {
                posthog.capture("button_clicked", { property: "to_app" });
              }
            }}
            className="text-[#5C0087] border-[#5C0087] hover:text-whit"
            href="https://app.esviaia.com/"
            variant="bordered"
          >
            Ir a la App
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
