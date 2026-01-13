import * as React from "react";
import { cn } from "../utils/cn";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleToggle = () => {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-disabled={disabled}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex h-7 w-12 items-center rounded-full border transition " +
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 " +
            "disabled:cursor-not-allowed disabled:opacity-50",
          isChecked
            ? "border-blue-500/50 bg-blue-600"
            : "border-white/10 bg-white/10",
          className
        )}
        disabled={disabled}
        {...props}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition",
            isChecked ? "translate-x-5" : "translate-x-1"
          )}
        />
      </button>
    );
  }
);

Switch.displayName = "Switch";
