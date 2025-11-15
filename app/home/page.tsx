import Container from "@/components/Container";
import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";

export const metadata = { title: "Home | Ice Cream Demo" };

export default function HomePage() {
  return (
    <main>
      {/* 顶部标题（居中） */}
      <section className="pt-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Auckland’s Favorite Scoops
            </h1>
            <p className="mt-3 text-lg">
              Small-batch ice cream, big smiles. Freshly churned flavours and
              locally sourced ingredients.
            </p>
          </div>

          {/* ✅ 小号 hero 图，居中，宽度固定 */}
          <div className="mt-8 flex justify-center">
            <img
              src="/assets/our-popular.jpg"
              alt="Ice cream cabinet"
              className="w-100 h-40 rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      {/* 中段内容整体居中 */}
      <section className="py-14">
        <Container>
          <Benefits />
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <Cta />
        </Container>
      </section>
    </main>
  );
}
