import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import MapClient, { type Store } from "./MapClient";

const stores: Store[] = [
  { name: "Ponsonby", addr: "123 Jervois Rd, Auckland", latlng: [-36.8477, 174.7369] },
  { name: "Newmarket", addr: "45 Broadway, Auckland", latlng: [-36.8690, 174.7790] },
];

export const metadata = { title: "Find a Store | Ice Cream Demo" };

export default function StorePage() {
  return (
    <main className="py-12">
      <Container>
        <SectionTitle>Find a Store</SectionTitle>
        <p className="mt-2 text-gray-600">Two scoops away from you.</p>

        {/* ??(???????) */}
        <div className="mt-6">
          <MapClient stores={stores} />
        </div>

        {/* ???? */}
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {stores.map((s) => (
            <li key={s.name} className="rounded-xl border bg-white/70 p-4 backdrop-blur">
              <div className="text-lg font-medium">{s.name}</div>
              <div className="text-gray-600">{s.addr}</div>
              <a
                className="mt-2 inline-block text-blue-600 hover:underline"
                href={`https://maps.google.com/?q=${encodeURIComponent(`${s.name} ${s.addr}`)}`}
                target="_blank"
              >
                Open in Google Maps
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}

