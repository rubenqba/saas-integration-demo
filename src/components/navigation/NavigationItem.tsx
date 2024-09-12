"use client";

import { Link, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

type NavigationItemProps = {
  label: string;
  href: string;
};

export default function NavigationItem({
  label,
  href,
}: Readonly<NavigationItemProps>) {
  const pathname = usePathname();

  return (
    <NavbarItem isActive={pathname === href}>
      <Link color="foreground" href={href} className="capitalize">
        {label}
      </Link>
    </NavbarItem>
  );
}
