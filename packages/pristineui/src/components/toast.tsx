import * as React from "react";
import { cn } from "../utils/cn";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Toast({ className, ...props }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        "w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950 p-4 text-white shadow-lg",
        className
      )}
      {...props}
    />
  );
}

export interface ToastTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function ToastTitle({ className, ...props }: ToastTitleProps) {
  return <h4 className={cn("text-sm font-semibold", className)} {...props} />;
}

export interface ToastDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function ToastDescription({
  className,
  ...props
}: ToastDescriptionProps) {
  return <p className={cn("text-sm text-white/70", className)} {...props} />;
}

export interface ToastActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ToastAction({ className, ...props }: ToastActionProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
