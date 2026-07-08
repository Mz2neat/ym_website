"use client";

import type { ButtonHTMLAttributes } from "react";

type Variant = "hero-solid" | "hero-outline" | "outline" | "solid" | "bar";

// Each variant owns border/background/hover-fill/lift/glow only.
// Text color and sizing/spacing stay with the caller via className.
const VARIANT_CLASSES: Record<Variant, string> = {
  "hero-solid":
    "bg-[#002bb3] hover:bg-white hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)]",
  "hero-outline":
    "border-2 border-[#2683EB] bg-[#0B0F14] hover:bg-white hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,1)]",
  outline:
    "border-2 border-[#2683EB] bg-[#000010] hover:bg-[#2683EB] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(38,131,235,0.8)]",
  solid:
    "border-2 border-[#2683EB] bg-[#2683EB] hover:bg-[#000010]",
  bar:
    "border-2 border-transparent bg-[#2683EB] hover:bg-[#000010] hover:border-[#2683EB]",
};

type CtaButtonProps = {
  variant?: Variant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function CtaButton({
  variant = "outline",
  className = "",
  ...rest
}: CtaButtonProps) {
  return (
    <button
      className={`font-medium transition-all duration-300 ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    />
  );
}
