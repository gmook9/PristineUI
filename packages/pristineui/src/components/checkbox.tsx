import * as React from "react";
import { cn } from "../utils/cn";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, disabled, ...props }, ref) => {
    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 text-sm text-white",
          disabled && "cursor-not-allowed opacity-50"
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          disabled={disabled}
          className={cn(
            "h-4 w-4 appearance-none rounded border border-white/20 bg-white/5 " +
              "transition focus-visible:outline-none focus-visible:ring-2 " +
              "focus-visible:ring-blue-500/40 checked:border-blue-500 checked:bg-blue-600",
            className
          )}
          {...props}
        />
        {label ? <span>{label}</span> : null}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
