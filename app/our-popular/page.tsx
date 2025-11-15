import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

type Item = {
  slug: string;
  name: string;
  price: number;
  img: string;
  tag: string;
};

const items: Item[] = [
  {
    slug: "vanilla",
    name: "Vanilla Bean",
    price: 5.5,
    img: "/assets/Vanilla_Bean.png",
    tag: "classic",
  },
  {
    slug: "strawberry",
    name: "Strawberry Dream",
    price: 5.5,
    img: "/assets/Strawberry_Dream.png",
    tag: "fresh",
  },
  {
    slug: "mango",
    name: "Mango Sunrise",
    price: 6.0,
    img: "/assets/Mango_Sunrise.png",
    tag: "seasonal",
  },
  {
    slug: "cookies",
    name: "Cookies & Cream",
    price: 6.0,
    img: "/assets/Cookies_and_Cream.png",
    tag: "indulgent",
  },
];

export const metadata = { title: "Our Popular | Ice Cream Demo" };

export default function PopularPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle>Our Popular</SectionTitle>
          <p className="mt-2 text-lg">
            All flavours · Fresh · Creamy · Joyful
          </p>

          {/* ✅ 小图 + 文本全部居中 */}
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {items.map((it) => (
              <article
                key={it.slug}
                className="flex flex-col items-center text-center space-y-3"
              >
                <img
                  src={it.img}
                  alt={it.name}
                  className="h-32 w-32 rounded-full object-cover shadow-md"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold">{it.name}</h3>
                <p className="text-base">
                  ${it.price.toFixed(2)}{" "}
                  <span className="ml-1 text-sm opacity-80">{it.tag}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
