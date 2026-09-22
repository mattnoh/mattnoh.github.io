"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const tabs = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav>
      {tabs.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={path === t.href ? "on" : undefined}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
