import type { Metadata } from "next";
import { MessageCircle, Mail, AtSign, Clock } from "lucide-react";
import { Container, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { waLink, EMAIL, INSTAGRAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Publiciart. Orçamento sem compromisso, resposta rápida e suporte humano direto no WhatsApp.",
};

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 91019-9514",
    href: waLink("Olá! Vim pelo site da Publiciart e quero um orçamento."),
    external: true,
  },
  { icon: Mail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { icon: AtSign, label: "Instagram", value: "@publiciart", href: INSTAGRAM, external: true },
];

export default function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos tirar sua ideia"
        highlight="do papel."
        sub="Me conta o que você precisa. Em poucos minutos você tem uma noção clara do que dá para fazer pelo seu negócio — sem compromisso."
      />

      <section className="relative z-10 py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="display text-2xl font-bold">Fale direto comigo</h2>
            <p className="mt-3 text-[var(--muted)] leading-relaxed">
              O jeito mais rápido é o WhatsApp — respondo pessoalmente. Prefere o formulário? Ele
              também cai no meu WhatsApp, já com sua mensagem pronta.
            </p>

            <div className="mt-8 space-y-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="surface group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-white/20"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl grad-bg text-[#0a0711]">
                    <c.icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-[var(--muted)]">{c.label}</span>
                    <span className="block font-semibold text-white">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/8 bg-[var(--bg-2)]/50 p-5 text-sm text-[var(--muted)]">
              <Clock size={18} className="shrink-0 text-[var(--cyan)]" />
              Costumo responder no mesmo dia, em horário comercial.
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
