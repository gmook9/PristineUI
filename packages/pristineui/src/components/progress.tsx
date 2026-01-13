import * as React from "react";
import { cn } from "../utils/cn";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const clamped = Math.max(0, Math.min(value, max));
    const percent = max > 0 ? (clamped / max) * 100 : 0;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          "relative h-3 w-full overflow-hidden rounded-full border border-white/10 bg-white/5",
          className
        )}
        {...props}
      >
        <div
          className="h-full rounded-full bg-blue-600 transition-[width]"
          style={{ width: `${percent}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";
