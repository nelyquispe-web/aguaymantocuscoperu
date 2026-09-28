import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  titulo,
  texto,
  align = "left",
  light = false,
  className,
  as: Heading = "h2",
}: {
  eyebrow?: string;
  titulo: ReactNode;
  texto?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center", className)}>
      {eyebrow ? (
        <span className={cn("eyebrow", light && "text-accent-soft")}>
          <span
            className={cn("h-px w-8", light ? "bg-accent-soft/70" : "bg-primary-soft/60")}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "mt-3 text-balance text-3xl leading-[1.15] md:text-4xl lg:text-[2.6rem]",
          light ? "text-primary-foreground" : "text-primary",
        )}
      >
        {titulo}
      </Heading>
      {texto ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[1.02rem] leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {texto}
        </p>
      ) : null}
    </Reveal>
  );
}
