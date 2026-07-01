import type { Metadata } from "next";
import { Check, ArrowRight, Star } from "lucide-react";
import { Container, Button, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { PLANS, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Planos",
  description: "Planos de criação de sites da Publiciart: do essencial ao premium com hospedagem e suporte inclusos.",
};

export default function Planos() {
  return (
    <>
      <PageHero
        eyebrow="Planos"
        title="Um plano para cada"
        highlight="ambição."
        sub="Do primeiro site à presença digital completa. Escolha o ponto de partida — o resto a gente constrói junto."
      />

      <section className="relative z-10 py-12 md:py-20">
        <Container>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => {
              const featured = plan.featured;
              return (
                <Reveal key={plan.name} delay={i * 0.08} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-3xl p-8 ${
                      featured ? "grad-border" : "surface"
                    }`}
                  >
                    {featured && (
                      <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full grad-bg px-3 py-1 text-xs font-bold text-[#0a0711]">
                        <Star size={12} /> Mais escolhido
                      </span>
                    )}
                    <h2 className="display text-2xl font-bold">{plan.name}</h2>
                    <p className="mt-2 text-sm text-[var(--muted)]">{plan.tagline}</p>

                    <div className="mt-6 border-y border-white/8 py-5">
                      <p className={`display text-3xl font-bold ${featured ? "gradient-text" : ""}`}>
                        {plan.price}
                      </p>
                      <p className="mt-1 text-xs text-[var(--muted)]">{plan.note}</p>
                    </div>

                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                          <Check size={16} className="mt-0.5 shrink-0 text-[var(--cyan)]" /> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button
                        href={waLink(`Olá! Tenho interesse no plano ${plan.name} da Publiciart.`)}
                        external
                        variant={featured ? "grad" : "ghost"}
                        className="w-full"
                      >
                        {plan.cta} <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-sm text-[var(--muted)]">
              Valores sob consulta e ajustados ao escopo do seu projeto. Sem surpresa: você aprova tudo antes de começar.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
