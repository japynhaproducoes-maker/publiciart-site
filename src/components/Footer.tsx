import Link from "next/link";
import Image from "next/image";
import { AtSign, Mail, MessageCircle } from "lucide-react";
import { NAV, waLink, EMAIL, INSTAGRAM } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[var(--bg-2)]/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Publiciart" width={44} height={44} className="h-10 w-10" />
            <span className="display text-xl font-bold">Publiciart</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            Sites premium, feitos à mão, que prendem a atenção e transformam visitantes em clientes.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Navegação</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/80 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Contato</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={waLink("Olá! Vim pelo site da Publiciart.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
              >
                <MessageCircle size={16} className="text-[var(--cyan)]" /> (11) 91019-9514
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
              >
                <Mail size={16} className="text-[var(--cyan)]" /> {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
              >
                <AtSign size={16} className="text-[var(--cyan)]" /> @publiciart
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} Publiciart. Todos os direitos reservados.</p>
          <p>Feito à mão, com café e código.</p>
        </div>
      </div>
    </footer>
  );
}
