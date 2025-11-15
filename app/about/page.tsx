import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "About | Ice Cream Demo" };

export default function AboutPage() {
  return (
    <main className="py-12">
      <Container>
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <SectionTitle>About</SectionTitle>

          <p>
            We make small-batch ice cream with locally sourced ingredients in
            Auckland.
          </p>
          <p>
            Founded in 2021, we experiment with seasonal flavours and keep
            classics on the menu.
          </p>
          <p>Come say hi — we are always churning something new.</p>
        </div>
      </Container>
    </main>
  );
}
