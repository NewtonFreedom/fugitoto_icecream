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
          {/* 可以保留 Logo；需要时换成你的图/文字 */}
          <Link href="/home" className="mb-3 flex items-center gap-2 text-xl font-semibold">
            <img src="/logo.svg" alt="logo" className="h-8 w-8" />
            <span>Ice Cream Demo</span>
          </Link>

          {/* Tabs：手机竖排，桌面横排 */}
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
