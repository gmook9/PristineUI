import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border font-medium transition",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/10 text-white",
        primary: "border-blue-500/40 bg-blue-600 text-white",
        success: "border-emerald-500/40 bg-emerald-600 text-white",
        warning: "border-amber-400/40 bg-amber-500 text-slate-900",
        danger: "border-rose-500/40 bg-rose-600 text-white",
        outline: "border-white/20 bg-transparent text-white",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        md: "px-2.5 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
