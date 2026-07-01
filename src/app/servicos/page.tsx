import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { Container, Button, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Criação de sites, landing pages, identidade visual, hospedagem, SEO e manutenção. Tudo premium, feito à mão.",
};

export default function Servicos() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Tudo que seu site precisa,"
        highlight="em um só lugar."
        sub="Do design ao servidor, do primeiro rascunho à manutenção. Cada serviço pensado para o seu negócio parecer — e performar — no nível premium."
      >
        <Button href={waLink("Olá! Quero um orçamento de site com a Publiciart.")} external>
          Pedir orçamento <ArrowRight size={18} />
        </Button>
      </PageHero>

      <section className="relative z-10 py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={(i % 2) * 0.08}>
                <div className="surface group flex h-full flex-col rounded-2xl p-8 transition-colors hover:border-white/20">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl grad-bg text-[#0a0711]">
                    <ServiceIcon name={svc.icon} size={26} />
                  </div>
                  <h2 className="display text-2xl font-bold">{svc.title}</h2>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">{svc.long}</p>
                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-white/85">
                        <Check size={16} className="shrink-0 text-[var(--cyan)]" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-5 rounded-3xl border border-white/8 bg-[var(--bg-2)]/50 p-10 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h3 className="display text-2xl font-bold">Não sabe por onde começar?</h3>
                <p className="mt-2 text-[var(--muted)]">Me conta sua ideia. Eu te digo o melhor caminho — sem compromisso.</p>
              </div>
              <Button href={waLink("Olá! Tenho uma ideia e queria uma orientação sobre o site.")} external className="shrink-0">
                Falar comigo <ArrowRight size={18} />
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
