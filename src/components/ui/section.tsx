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
  default: "bg-[#f8fafc] text-slate-900",
  alt: "bg-slate-50 border-y border-slate-200 text-slate-900",
  dark: "bg-slate-100 border-y border-slate-200 text-slate-900",
  gradient: "bg-gradient-to-br from-blue-50/80 via-indigo-50/40 to-white border-y border-slate-200 text-slate-900",
  transparent: "bg-transparent text-slate-900",
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
