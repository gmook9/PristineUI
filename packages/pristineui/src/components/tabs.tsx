import * as React from "react";
import { cn } from "../utils/cn";

type TabsValue = string;

interface TabsContextValue {
  value: TabsValue;
  onValueChange: (value: TabsValue) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: TabsValue;
  defaultValue?: TabsValue;
  onValueChange?: (value: TabsValue) => void;
}

export function Tabs({
  className,
  value,
  defaultValue,
  onValueChange,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState<TabsValue | undefined>(
    defaultValue
  );
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  const handleValueChange = (next: TabsValue) => {
    if (!isControlled) {
      setInternalValue(next);
    }
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider
      value={{
        value: activeValue ?? "",
        onValueChange: handleValueChange,
      }}
    >
      <div className={cn("space-y-4", className)} {...props} />
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TabsList({ className, ...props }: TabsListProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-xl border border-white/10 bg-white/5 p-1",
        className
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: TabsValue;
}

export function TabsTrigger({
  className,
  value,
  ...props
}: TabsTriggerProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error("TabsTrigger must be used within Tabs");
  }

  const isActive = ctx.value === value;

  return (
    <button
      type="button"
      onClick={() => ctx.onValueChange(value)}
      className={cn(
        "rounded-lg px-3 py-1.5 text-sm transition",
        isActive ? "bg-white/10 text-white" : "text-white/60 hover:text-white",
        className
      )}
      {...props}
    />
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: TabsValue;
}

export function TabsContent({
  className,
  value,
  ...props
}: TabsContentProps) {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error("TabsContent must be used within Tabs");
  }

  if (ctx.value !== value) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80",
        className
      )}
      {...props}
    />
  );
}
