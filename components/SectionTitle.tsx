// components/SectionTitle.tsx
type Props = { children: React.ReactNode };

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="text-center text-3xl font-bold tracking-tight mb-6">
      {children}
    </h2>
  );
}
