import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container, Button } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES, PROJECTS, STATS, waLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative z-10 overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Agência de criação de sites</span>
            <h1 className="display mt-6 text-5xl font-bold sm:text-6xl md:text-7xl">
              O site que faz seu negócio <span className="gradient-text">decolar.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--muted)]">
              Crio sites premium, feitos à mão, que prendem a atenção, transmitem confiança e
              transformam visitantes em clientes. Sem template. Sem enrolação.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={waLink("Olá! Quero um site premium com a Publiciart.")} external>
                Quero meu site <ArrowRight size={18} />
              </Button>
              <Button href="/portfolio" variant="ghost">
                Ver portfólio
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="absolute inset-0 -z-10 grad-bg opacity-20 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto flex max-w-sm items-center justify-center">
              <Image
                src="/logo.png"
                alt="Publiciart"
                width={520}
                height={520}
                className="w-full drop-shadow-2xl"
                priority
              />
            </div>
            {/* chips flutuantes */}
            <div className="glass absolute -left-2 top-8 hidden rounded-2xl px-4 py-3 sm:block">
              <p className="display text-lg font-bold">100%</p>
              <p className="text-xs text-[var(--muted)]">feito à mão</p>
            </div>
            <div className="glass absolute -right-1 bottom-8 hidden rounded-2xl px-4 py-3 sm:block">
              <p className="display text-lg font-bold gradient-text">Premium</p>
              <p className="text-xs text-[var(--muted)]">do topo ao rodapé</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee />

      {/* ═══ STATS ═══ */}
      <section className="relative z-10 py-16">
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[var(--bg)] p-7 text-center">
                <p className="display text-3xl font-bold gradient-text">{s.value}</p>
                <p className="mt-2 text-sm text-[var(--muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ SERVIÇOS ═══ */}
      <section className="relative z-10 py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">O que eu faço</span>
                <h2 className="display mt-4 text-3xl font-bold md:text-5xl">
                  Serviços <span className="gradient-text">premium</span>
                </h2>
              </div>
              <Link href="/servicos" className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white">
                Ver todos os serviços
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.05}>
                <div className="surface group h-full rounded-2xl p-7 transition-colors hover:border-white/20">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl grad-bg text-[#0a0711]">
                    <ServiceIcon name={svc.icon} size={22} />
                  </div>
                  <h3 className="display text-xl font-bold">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{svc.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ PORTFÓLIO ═══ */}
      <section className="relative z-10 border-y border-white/8 bg-[var(--bg-2)]/40 py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Portfólio</span>
                <h2 className="display mt-4 text-3xl font-bold md:text-5xl">
                  O tipo de site que eu <span className="gradient-text">crio</span>
                </h2>
              </div>
              <Link href="/portfolio" className="group inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-white">
                Ver portfólio completo
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07}>
                <div className="surface group h-full overflow-hidden rounded-2xl">
                  <div className="relative h-28 overflow-hidden" style={{ background: p.accent }}>
                    <div className="absolute inset-0 opacity-90" style={{ background: `linear-gradient(120deg, ${p.accent}, #0a0711)` }} />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-widest text-white/80">
                      {p.concept}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
                      <span>{p.segment}</span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span>{p.location}</span>
                    </div>
                    <h3 className="display mt-2 text-lg font-bold leading-snug">{p.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] line-clamp-3">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ PROCESSO ═══ */}
      <section className="relative z-10 py-20 md:py-28">
        <Container>
          <Reveal>
            <span className="eyebrow">Como funciona</span>
            <h2 className="display mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
              Do primeiro oi ao site <span className="gradient-text">no ar</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", t: "Conversa", d: "A gente fala pelo WhatsApp, entendo seu negócio, seu público e o objetivo do site. Sem formulário robótico." },
              { n: "02", t: "Criação", d: "Desenho a identidade e construo o site à mão, com você acompanhando cada etapa e ajustando o que quiser." },
              { n: "03", t: "No ar", d: "Publico na hospedagem própria, com SSL e velocidade. E fico com você no suporte para o que vier depois." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative">
                  <span className="display text-5xl font-bold text-white/10">{step.n}</span>
                  <h3 className="display mt-2 text-xl font-bold">{step.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative z-10 pb-24">
        <Container>
          <Reveal>
            <div className="grad-border overflow-hidden rounded-3xl p-10 text-center md:p-16">
              <h2 className="display mx-auto max-w-2xl text-3xl font-bold md:text-5xl">
                Pronto para ter um site de <span className="gradient-text">outro nível?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[var(--muted)]">
                Me chama no WhatsApp. Em minutos você tem uma ideia clara do que dá para fazer pelo seu negócio.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={waLink("Olá! Quero conversar sobre um site com a Publiciart.")} external>
                  Falar comigo agora <ArrowRight size={18} />
                </Button>
                <Button href="/planos" variant="ghost">
                  Ver planos
                </Button>
              </div>
              <ul className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
                {["Resposta rápida", "Orçamento sem compromisso", "Suporte humano"].map((x) => (
                  <li key={x} className="flex items-center gap-1.5">
                    <Check size={15} className="text-[var(--cyan)]" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
