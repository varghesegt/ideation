import React from "react";
import { cn } from "@/lib/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl" | "none";
  bg?: "default" | "alt" | "dark" | "gradient" | "transparent";
}

const spacingClasses = {
  none: "py-0",
  sm: "py-10 md:py-12",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-24 md:py-36",
};

const bgClasses = {
  default: "bg-[var(--color-bg)]",
  alt: "bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]",
  dark: "bg-[var(--color-bg-dark)] text-white",
  gradient: "gradient-hero text-white",
  transparent: "bg-transparent",
};

export function Section({
  spacing = "lg",
  bg = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden transition-colors",
        spacingClasses[spacing],
        bgClasses[bg],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
