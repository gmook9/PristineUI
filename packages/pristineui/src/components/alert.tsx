import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const alertVariants = cva(
  "relative w-full rounded-2xl border px-4 py-3 text-sm shadow-sm",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/5 text-white",
        info: "border-blue-500/40 bg-blue-500/15 text-blue-100",
        success: "border-emerald-500/40 bg-emerald-500/15 text-emerald-100",
        warning: "border-amber-400/40 bg-amber-500/15 text-amber-100",
        danger: "border-rose-500/40 bg-rose-500/15 text-rose-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Alert.displayName = "Alert";

export interface AlertTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <h5 className={cn("text-sm font-semibold", className)} {...props} />;
}

export interface AlertDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function AlertDescription({
  className,
  ...props
}: AlertDescriptionProps) {
  return <p className={cn("text-sm text-white/70", className)} {...props} />;
}
