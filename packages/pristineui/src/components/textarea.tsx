import * as React from "react";
import { cn } from "../utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white " +
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

Textarea.displayName = "Textarea";
