"use client";

import { useEffect, useRef, useState } from "react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from "@gmook9/pristine-ui";

const CMD = "pnpm add @gmook9/pristine-ui";

export default function InstallPill() {
  const [copied, setCopied] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  function showToast() {
    setToastVisible(true);
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
      toastTimeoutRef.current = null;
    }, 1800);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(CMD);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
      showToast();
    } catch {
      // fallback if clipboard API is blocked
      const el = document.createElement("textarea");
      el.value = CMD;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
      showToast();
    }
  }

  return (
    <div className="mt-6 flex justify-center">
      <div className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 shadow-sm backdrop-blur">
        <span className="rounded-full bg-green-400/30 px-2 py-0.5 text-[11px] text-white/80">
          install
        </span>

        <code className="font-mono text-[13px] text-white/90">{CMD}</code>

        <button
          type="button"
          onClick={copy}
          className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/85 hover:bg-white/15 active:scale-[0.98]"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      {toastVisible ? (
        <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
          <Toast className="pointer-events-auto">
            <ToastTitle>Copied</ToastTitle>
            <ToastDescription>
              Install command copied to your clipboard.
            </ToastDescription>
            <div className="mt-3 flex justify-end">
              <ToastAction onClick={() => setToastVisible(false)}>
                Dismiss
              </ToastAction>
            </div>
          </Toast>
        </div>
      ) : null}
    </div>
  );
}
