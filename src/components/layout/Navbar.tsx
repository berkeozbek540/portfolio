"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ModeToggle } from "../ui/ModeToggle";
import { HamburgerMenu } from "../ui/HamburgerMenu";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "tr" : "en";
    router.push(`/${newLocale}${pathname.replace(`/${locale}`, "")}`);
  };

  const links = [
    { href: "/", label: t("about") },
    { href: "/resume", label: t("resume") },
    { href: "/projects", label: t("projects") },
    { href: "/contact", label: t("contact") },
  ];

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
        <button
          onClick={toggleLocale}
          className="px-3 py-1.5 rounded-lg text-sm font-medium text-amber-400 hover:text-white transition-colors border border-white/10">
          {locale === "en" ? "TR" : "EN"}
        </button>
        {/* <ModeToggle /> */}
      </div>
      <div className="flex items-center justify-end md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
}
