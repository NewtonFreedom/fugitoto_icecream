import SectionTitle from "@/components/SectionTitle";

export default function Benefits() {
  return (
    <section className="text-center">
      <SectionTitle>Why people love us</SectionTitle>

      <p className="mt-3 text-lg">
        Crafted with care, real ingredients, and a lot of joy.
      </p>

      {/* 三条卖点，全部居中显示 */}
      <div className="mt-8 space-y-4 text-lg">
        <p>
          ✓ Freshly churned
          <br />
          Made daily in small batches.
        </p>
        <p>
          ✓ Seasonal fruits
          <br />
          Local suppliers, peak flavour.
        </p>
        <p>
          ✓ Classic &amp; creative
          <br />
          From vanilla bean to mango sunrise.
        </p>
      </div>
    </section>
  );
}
