import * as React from "react";
import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white " +
            "placeholder:text-white/40 shadow-sm outline-none transition " +
            "focus:border-white/20 focus:ring-2 focus:ring-blue-500/40 " +
            "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
