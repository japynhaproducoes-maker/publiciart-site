"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV, waLink } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open
          ? "bg-[var(--bg)]/85 backdrop-blur-xl border-b border-white/10"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Publiciart — início" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Publiciart" width={44} height={44} className="h-10 w-10" priority />
          <span className="display text-xl font-bold tracking-tight">Publiciart</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    active ? "text-white" : "text-[var(--muted)] hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && <span className="mx-auto mt-0.5 block h-0.5 w-5 grad-bg rounded-full" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Olá! Vim pelo site da Publiciart e quero um orçamento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full grad-bg px-5 py-2.5 text-sm font-semibold text-[#0a0711] transition hover:brightness-110 sm:inline-flex"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <button
            className="lg:hidden text-white"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--bg)]/95 backdrop-blur-xl">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block border-b border-white/5 py-4 text-lg ${
                      active ? "gradient-text font-semibold" : "text-[var(--muted)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-5">
              <a
                href={waLink("Olá! Vim pelo site da Publiciart e quero um orçamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full grad-bg px-5 py-3.5 font-semibold text-[#0a0711]"
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
