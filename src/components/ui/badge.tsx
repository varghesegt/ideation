import React from "react";
import { cn } from "@/lib/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "success" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
}

const variantClasses = {
  primary: "bg-blue-100 text-blue-800 border-blue-200",
  accent: "bg-amber-100 text-amber-800 border-amber-200",
  success: "bg-emerald-100 text-emerald-800 border-emerald-200",
  outline: "bg-transparent text-[var(--color-text)] border-[var(--color-border)]",
  glass: "bg-white/10 text-white border-white/20 backdrop-blur-md",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs font-medium",
  md: "px-3 py-1 text-xs font-semibold",
  lg: "px-4 py-1.5 text-sm font-semibold",
};

export function Badge({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border tracking-wide uppercase",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
