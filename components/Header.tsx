"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Wordmark from "./Wordmark";

type NavLink = { href: string; label: string };

export default function Header({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll, trap focus, close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && menuRef.current) {
        const items = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === `${href}/`;
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-colors duration-200 ${
        solid ? "border-b border-line bg-ink/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <div className="container-z flex h-full items-center justify-between gap-6">
        <Link href="/" aria-label="Zenith Capital, home" className="relative z-[51] shrink-0">
          <Wordmark />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 md:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`relative rounded px-2 py-2 text-[15px] font-medium transition-colors md:px-3 ${
                    isActive(l.href) ? "text-white" : "text-mist hover:text-white"
                  }`}
                >
                  {l.label}
                  {isActive(l.href) && <span aria-hidden className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded bg-red-bright md:inset-x-3" />}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined} className="btn btn-primary !h-10 !px-5">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle (JS only) */}
        <button
          ref={toggleRef}
          type="button"
          className="js-only relative z-[51] -mr-2 grid size-11 place-items-center rounded md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span aria-hidden className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-white transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="fixed inset-0 z-50 bg-ink pt-[var(--header-h)] md:hidden"
      >
        <nav aria-label="Mobile" className="container-z flex h-full flex-col pb-10 pt-8">
          <ul className="flex flex-col gap-1">
            {[...links, { href: "/contact", label: "Contact" }].map((l) => (
              <li key={l.href} className="border-b border-line">
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`block py-5 text-3xl font-bold ${isActive(l.href) ? "text-red-bright" : "text-white"}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-auto !text-mist">Alpha Epsilon Zeta • UC Berkeley</p>
        </nav>
      </div>
    </header>
  );
}
