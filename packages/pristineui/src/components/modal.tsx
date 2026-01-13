import * as React from "react";
import { cn } from "../utils/cn";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Modal({
  className,
  open,
  onOpenChange,
  ...props
}: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/60"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-lg rounded-2xl border border-white/10 bg-slate-950 p-6 text-white shadow-xl",
          className
        )}
        {...props}
      />
    </div>
  );
}

export interface ModalHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalHeader({ className, ...props }: ModalHeaderProps) {
  return <div className={cn("space-y-1", className)} {...props} />;
}

export interface ModalTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export function ModalTitle({ className, ...props }: ModalTitleProps) {
  return <h3 className={cn("text-lg font-semibold", className)} {...props} />;
}

export interface ModalDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

export function ModalDescription({
  className,
  ...props
}: ModalDescriptionProps) {
  return <p className={cn("text-sm text-white/70", className)} {...props} />;
}

export interface ModalFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function ModalFooter({ className, ...props }: ModalFooterProps) {
  return (
    <div
      className={cn("mt-6 flex items-center justify-end gap-2", className)}
      {...props}
    />
  );
}
