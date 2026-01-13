import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const skeletonVariants = cva("animate-pulse rounded-xl bg-white/10", {
  variants: {
    variant: {
      default: "bg-white/10",
      subtle: "bg-white/5",
    },
    size: {
      sm: "h-3",
      md: "h-4",
      lg: "h-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {}

export function Skeleton({
  className,
  variant,
  size,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(skeletonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
