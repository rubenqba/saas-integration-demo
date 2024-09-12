import { Button, Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import NavigationItem from "@component/navigation/NavigationItem";

const NavBar: React.FC = () => {
    const pages = [
        { label: "Home", href: "/" },
        { label: "Integrations", href: "/integrations" },
        { label: "Connections", href: "/connections" },
        { label: "Data", href: "/data" },
    ];

  return (
    <Navbar className="bg-indigo-500 text-white">
      <NavbarContent>
        {pages.map((page) => (<NavigationItem key={page.href} {...page} />))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link color="foreground" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" variant="bordered" href="#">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
