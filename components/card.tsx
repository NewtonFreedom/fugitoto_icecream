import { cn } from "@/lib/utils"; // optional: if you have a cn helper; otherwise remove

type CardProps = React.PropsWithChildren<{
  className?: string;
  title?: string;
  subtitle?: string;
}>;

export default function Card({ className, title, subtitle, children }: CardProps) {
  return (
    <div className={cn ? cn("rounded-2xl border p-5 shadow-sm", className) : "rounded-2xl border p-5 shadow-sm " + (className ?? "")}>
      {title && <div className="text-lg font-semibold">{title}</div>}
      {subtitle && <div className="text-sm opacity-70">{subtitle}</div>}
      <div className={title || subtitle ? "mt-3" : ""}>{children}</div>
    </div>
  );
}