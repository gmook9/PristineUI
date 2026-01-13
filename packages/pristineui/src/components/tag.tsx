import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const tagVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium",
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
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void;
}

export function Tag({ className, variant, onRemove, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)} {...props}>
      {props.children}
      {onRemove ? (
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex h-4 w-4 items-center justify-center rounded-full text-xs text-white/80 transition hover:text-white"
          aria-label="Remove"
        >
          &times;
        </button>
      ) : null}
    </span>
  );
}
