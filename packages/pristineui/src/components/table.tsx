import * as React from "react";
import { cn } from "../utils/cn";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export function Table({ className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10">
      <table
        className={cn("w-full border-collapse text-sm text-white", className)}
        {...props}
      />
    </div>
  );
}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableHeader({ className, ...props }: TableHeaderProps) {
  return <thead className={cn("bg-white/5", className)} {...props} />;
}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export function TableBody({ className, ...props }: TableBodyProps) {
  return <tbody className={cn("divide-y divide-white/10", className)} {...props} />;
}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}

export function TableRow({ className, ...props }: TableRowProps) {
  return <tr className={cn("hover:bg-white/5", className)} {...props} />;
}

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export function TableHead({ className, ...props }: TableHeadProps) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white/70",
        className
      )}
      {...props}
    />
  );
}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export function TableCell({ className, ...props }: TableCellProps) {
  return <td className={cn("px-4 py-3", className)} {...props} />;
}

export interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableCaptionElement> {}

export function TableCaption({ className, ...props }: TableCaptionProps) {
  return (
    <caption className={cn("p-4 text-left text-xs text-white/50", className)} {...props} />
  );
}
