import * as React from "react";
import { cn } from "../utils/cn";

type AccordionValue = string | null;

interface AccordionContextValue {
  value: AccordionValue;
  onValueChange: (value: AccordionValue) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string | null;
}

export function Accordion({
  className,
  defaultValue = null,
  ...props
}: AccordionProps) {
  const [value, setValue] = React.useState<AccordionValue>(defaultValue);

  return (
    <AccordionContext.Provider value={{ value, onValueChange: setValue }}>
      <div className={cn("space-y-2", className)} {...props} />
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionItem({
  className,
  value,
  ...props
}: AccordionItemProps) {
  return (
    <div
      className={cn("rounded-2xl border border-white/10 bg-white/5", className)}
      data-value={value}
      {...props}
    />
  );
}

export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function AccordionTrigger({
  className,
  value,
  ...props
}: AccordionTriggerProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }

  const isOpen = ctx.value === value;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-white " +
          "transition hover:bg-white/5",
        className
      )}
      aria-expanded={isOpen}
      onClick={() => ctx.onValueChange(isOpen ? null : value)}
      {...props}
    />
  );
}

export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function AccordionContent({
  className,
  value,
  ...props
}: AccordionContentProps) {
  const ctx = React.useContext(AccordionContext);
  if (!ctx) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const isOpen = ctx.value === value;

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn("px-4 pb-4 text-sm text-white/70", className)}
      {...props}
    />
  );
}
