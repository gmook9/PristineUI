"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="relative flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <Image
            src="/PristineUI_Logo2.png"
            alt="PristineUI"
            width={32}
            height={32}
            priority
          />
        </div>
        <span className="text-sm font-semibold tracking-wide">PristineUI</span>
      </Link>

      {/* desktop nav */}
      <nav className="hidden items-center gap-5 sm:flex">
        <Link href="/viewComponents" className="text-sm text-white/70 hover:text-white">
          Components
        </Link>
        <Link href="/docs" className="text-sm text-white/70 hover:text-white">
          Docs
        </Link>
        <a
          href="https://github.com/gmook9/PristineUI"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white/70 hover:text-white"
        >
          GitHub
        </a>
      </nav>

      {/* mobile hamburger */}
      <div className="sm:hidden" ref={panelRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 backdrop-blur hover:bg-white/10"
        >
          {/* simple hamburger icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 top-12 z-50 w-44 rounded-2xl border border-white/10 bg-zinc-950/80 p-2 shadow-lg backdrop-blur">
            <Link
              href="/viewComponents"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Components
            </Link>
            <Link
              href="/docs"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Docs
            </Link>
            <a
              href="https://github.com/gmook9/PristineUI"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
