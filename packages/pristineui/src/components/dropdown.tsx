import * as React from "react";
import { cn } from "../utils/cn";

interface DropdownContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Dropdown({ className, ...props }: DropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className={cn("relative inline-flex", className)} {...props} />
    </DropdownContext.Provider>
  );
}

export interface DropdownTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DropdownTrigger({
  className,
  ...props
}: DropdownTriggerProps) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) {
    throw new Error("DropdownTrigger must be used within Dropdown");
  }

  return (
    <button
      type="button"
      aria-expanded={ctx.open}
      onClick={() => ctx.setOpen(!ctx.open)}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}

export interface DropdownContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function DropdownContent({
  className,
  ...props
}: DropdownContentProps) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) {
    throw new Error("DropdownContent must be used within Dropdown");
  }

  if (!ctx.open) {
    return null;
  }

  return (
    <div
      className={cn(
        "absolute left-0 top-full mt-2 w-48 rounded-2xl border border-white/10 bg-slate-950 p-1 text-sm text-white shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export interface DropdownItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DropdownItem({
  className,
  ...props
}: DropdownItemProps) {
  const ctx = React.useContext(DropdownContext);
  if (!ctx) {
    throw new Error("DropdownItem must be used within Dropdown");
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        props.onClick?.(event);
        ctx.setOpen(false);
      }}
      className={cn(
        "flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/10 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
