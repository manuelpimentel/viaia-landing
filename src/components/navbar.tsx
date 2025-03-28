import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => (
  <img src="/Vector-1.png" alt="Logo" width={36} height={36} />
);

export default function NavBar() {
  return (
    <Navbar
      className="fixed top-0 left-0 right-0 z-[9999] bg-[#fcfcfc]/70 backdrop-blur-md backdrop-saturate-150"
      isBlurred={true}
      maxWidth="full"
      position="static"
    >
      <NavbarBrand>
        <AcmeLogo />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            className="text-[#5C0087] border-[#5C0087] hover:bg-[#5C0087] hover:text-white"
            href="#" 
            variant="bordered"
          >
            Ir a la App
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
