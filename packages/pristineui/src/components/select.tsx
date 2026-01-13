import * as React from "react";
import { cn } from "../utils/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white " +
            "shadow-sm outline-none transition focus:border-white/20 focus:ring-2 focus:ring-blue-500/40",
          className
        )}
        {...props}
      />
    );
  }
);

Select.displayName = "Select";
