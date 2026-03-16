"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/ModeToggle";
import { HamburgerMenu } from "../ui/HamburgerMenu";

const links = [
  { label: "About", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky z-50 px-4">
      <div className="hidden md:flex items-center justify-end gap-1">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors
            ${
              pathname === href
                ? "text-amber-400 border-b-2 border-amber-400"
                : "text-white/50 hover:text-white"
            }`}>
            {label}
          </Link>
        ))}
        {/* <ModeToggle /> */}
      </div>
      <div className="flex items-center justify-between md:hidden">
        <div>
          {pathname === "/" ? (
            <div className="px-4 py-1.5 rounded-lg text-xl font-large text-amber-400 border-amber-400">
              About
            </div>
          ) : (
            <span>{pathname}</span>
          )}
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
}
