import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container, Button, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { PROJECTS, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Projetos entregues pela Publiciart: sites premium com identidade própria para clínicas e negócios.",
};

export default function Portfolio() {
  return (
    <>
      <PageHero
        eyebrow="Portfólio"
        title="O padrão de sites"
        highlight="que eu crio."
        sub="Cada projeto ganha uma identidade única, extraída do próprio negócio. Abaixo, os segmentos que eu atendo — em breve, com os cases reais dos clientes."
      >
        <Button href={waLink("Olá! Vi o portfólio da Publiciart e quero um site assim.")} external>
          Quero um site assim <ArrowRight size={18} />
        </Button>
      </PageHero>

      <section className="relative z-10 py-16 md:py-24">
        <Container>
          <div className="grid gap-8">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.06}>
                <article className="surface group grid overflow-hidden rounded-3xl md:grid-cols-[1.1fr_1.4fr]">
                  {/* Visual do case (cor real do projeto) */}
                  <div className="relative min-h-48 overflow-hidden" style={{ background: p.accent }}>
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${p.accent} 0%, #0a0711 130%)` }}
                    />
                    <div className="relative flex h-full flex-col justify-between p-8">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        {p.year || "Segmento"}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-white/60">Conceito</p>
                        <p className="display text-3xl font-bold text-white">{p.concept}</p>
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                      <span className="rounded-full border border-white/10 px-3 py-1">{p.segment}</span>
                      <span>{p.location}</span>
                    </div>
                    <h2 className="display mt-4 text-2xl font-bold md:text-3xl">{p.name}</h2>
                    <p className="mt-4 text-[var(--muted)] leading-relaxed">{p.description}</p>
                    <div className="mt-7">
                      <a
                        href={waLink(`Olá! Gostei do projeto ${p.name} e quero algo parecido.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        <MessageCircle size={16} className="text-[var(--cyan)]" />
                        Quero um projeto assim
                        <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-12 text-center text-sm text-[var(--muted)]">
              Novos projetos entram aqui a cada entrega. Quer ser o próximo?{" "}
              <a
                href={waLink("Olá! Quero que meu site entre no portfólio da Publiciart.")}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text font-semibold"
              >
                Bora conversar.
              </a>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
