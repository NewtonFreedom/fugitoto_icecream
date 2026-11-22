"use client";

import Link from "next/link";
import Container from "./Container";

const NAV = [
  { name: "Our Popular", href: "/our-popular" },
  { name: "Find a Store", href: "/find-a-store" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <div className="w-full">
      <Container>
        <nav className="py-6">
          {/* ???? Logo;????????/?? */}
          <Link href="/home" className="mb-3 flex items-center gap-2 text-xl font-semibold">
            <img src="/Logo.svg" alt="Ice Cream Demo" className="h-8 w-8" />
            <span>Ice Cream Demo</span>
          </Link>

          {/* Tabs:????,???? */}
          <div className="nav-vertical md:flex md:flex-row md:justify-center md:gap-6">
            {NAV.map((m) => (
              <Link key={m.href} href={m.href}>
                {m.name}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </div>
  );
}
