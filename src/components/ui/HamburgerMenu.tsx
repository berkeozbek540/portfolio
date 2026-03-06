"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/dist/client/components/navigation";
import { Menu } from "lucide-react";

const links = [
  { label: "About", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function HamburgerMenu() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Menu className="h-6 w-6" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-32">
              {links.map(({ label, href }) => (
                <ListItem
                  key={href}
                  href={href}
                  title={label}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${
                  pathname === href ? "text-amber-400 " : "text-white/50 hover:text-white"
                }`}></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
