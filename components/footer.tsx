import Container from "./Container";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Our Popular", href: "/our-popular" },
  { name: "Find a Store", href: "/find-a-store" },
  { name: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <Container>
        <div className="grid gap-8 py-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/home" className="flex items-center space-x-2 text-xl font-semibold">
              <img src="/Logo.svg" alt="Ice Cream Demo" className="w-8 h-8" />
              <span>Ice Cream Demo</span>
            </Link>
            <p className="mt-3 text-gray-500">
              Small-batch ice cream, big smiles. Freshly churned flavours and locally
              sourced ingredients.
            </p>
          </div>
          <nav className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-indigo-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="lg:col-span-1">
            <div className="text-gray-600">Follow us</div>
            <div className="mt-4 flex gap-4 text-gray-400">
              <a href="#" aria-label="Instagram" className="hover:text-gray-600">IG</a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-600">FB</a>
              <a href="#" aria-label="TikTok" className="hover:text-gray-600">TT</a>
            </div>
          </div>
        </div>

        <div className="pb-10 text-center text-sm text-gray-500">
          c {new Date().getFullYear()} Ice Cream Demo. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
