"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";
import { nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur-sm transition-colors ${
        scrolled ? "border-rule" : "border-transparent"
      }`}
    >
      <div className="wrap flex h-[var(--header-h)] items-center justify-between">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[15px] font-medium text-muted no-underline transition-colors after:absolute after:-bottom-[27px] after:left-0 after:h-[2px] after:w-0 after:bg-maroon after:transition-[width] hover:text-ink hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-l border-rule pl-9 text-[13px] font-semibold uppercase tracking-[0.12em] text-navy no-underline hover:text-maroon"
          >
            AEZ ↗
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

    </header>
      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto overscroll-contain bg-paper md:hidden">
          <nav aria-label="Mobile" className="wrap flex flex-col pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-5 font-serif text-3xl text-ink no-underline"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-5 text-sm font-semibold uppercase tracking-[0.14em] text-navy no-underline"
            >
              Alpha Epsilon Zeta ↗
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
