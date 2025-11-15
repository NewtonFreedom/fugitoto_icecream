import Container from "./Container";

export default function Cta() {
  return (
    <Container>
      <section className="mx-auto my-14 max-w-4xl rounded-2xl bg-black px-8 py-10 text-white">
        <h2 className="text-2xl font-semibold">Ready for a taste?</h2>
        <p className="mt-2 text-white/80">
          Find your nearest store and try our seasonal picks today.
        </p>
        <a
          href="/find-a-store"
          className="mt-5 inline-block rounded-lg bg-white px-5 py-2.5 text-black hover:bg-gray-200"
        >
          Find a Store
        </a>
      </section>
    </Container>
  );
}

