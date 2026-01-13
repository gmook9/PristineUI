import * as React from "react";
import { cn } from "../utils/cn";

export interface TooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({
  className,
  content,
  side = "top",
  children,
  ...props
}: TooltipProps) {
  return (
    <span className="relative inline-flex group" {...props}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-10 whitespace-nowrap rounded-lg border border-white/10 " +
            "bg-slate-950 px-2 py-1 text-xs text-white opacity-0 transition " +
            "group-hover:opacity-100 group-focus-within:opacity-100",
          side === "top" && "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
          side === "bottom" && "top-full left-1/2 -translate-x-1/2 translate-y-2",
          side === "left" && "right-full top-1/2 -translate-y-1/2 -translate-x-2",
          side === "right" && "left-full top-1/2 -translate-y-1/2 translate-x-2",
          className
        )}
      >
        {content}
      </span>
    </span>
  );
}
