import React from "react";
import { cn } from "@/lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "flat" | "interactive" | "glass" | "bordered";
}

const variantClasses = {
  default: "bg-white text-[var(--color-text)] shadow-sm border border-[var(--color-border)] rounded-2xl",
  flat: "bg-[var(--color-bg-alt)] border border-[var(--color-border)] rounded-2xl",
  interactive:
    "bg-white text-[var(--color-text)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-[var(--color-border)] rounded-2xl cursor-pointer",
  glass:
    "bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl shadow-lg",
  bordered:
    "bg-transparent border-2 border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)] transition-colors",
};

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn("p-6 md:p-8", variantClasses[variant], className)} {...props}>
      {children}
    </div>
  );
}
