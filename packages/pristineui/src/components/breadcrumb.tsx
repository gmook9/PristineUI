import * as React from "react";
import { cn } from "../utils/cn";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("text-sm text-white/70", className)}
      {...props}
    />
  );
}

export interface BreadcrumbListProps
  extends React.OlHTMLAttributes<HTMLOListElement> {}

export function BreadcrumbList({
  className,
  ...props
}: BreadcrumbListProps) {
  return (
    <ol
      className={cn("flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
}

export interface BreadcrumbItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li className={cn("inline-flex items-center gap-2", className)} {...props} />
  );
}

export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function BreadcrumbLink({ className, ...props }: BreadcrumbLinkProps) {
  return (
    <a
      className={cn("text-white/80 transition hover:text-white", className)}
      {...props}
    />
  );
}

export interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export function BreadcrumbSeparator({
  className,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <span className={cn("text-white/30", className)} {...props} />
  );
}
