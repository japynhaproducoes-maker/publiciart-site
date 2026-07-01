import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Heart, Zap, ShieldCheck, Handshake } from "lucide-react";
import { Container, Button, PageHero } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Quem está por trás da Publiciart: a história, os valores e o compromisso com sites que vendem.",
};

const VALUES = [
  { icon: Heart, t: "Feito à mão", d: "Nada de template genérico. Cada site nasce do zero, pensado para o seu negócio e mais ninguém." },
  { icon: Zap, t: "Foco em resultado", d: "Site bonito é o começo. O que importa é ele trabalhar por você: gerar contato, transmitir confiança e vender." },
  { icon: ShieldCheck, t: "Qualidade premium", d: "Do design ao código, do topo ao rodapé. Um padrão que faz o seu negócio parecer — e ser — maior." },
  { icon: Handshake, t: "Suporte humano", d: "Você fala comigo, não com um robô. Direto, rápido e sem fila de atendimento." },
];

export default function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a Publiciart"
        title="Eu entrego sites que"
        highlight="vendem."
        sub="Sou especialista em criação de sites profissionais com foco em resultado. Meu compromisso é qualidade premium, suporte de verdade e um site que seja o cartão de visitas perfeito do seu negócio."
      >
        <Button href={waLink("Olá! Quero conhecer melhor o trabalho da Publiciart.")} external>
          Falar comigo <ArrowRight size={18} />
        </Button>
        <Button href="/portfolio" variant="ghost">
          Ver meus trabalhos
        </Button>
      </PageHero>

      {/* História + fotos */}
      <section className="relative z-10 py-20 md:py-28">
        <Container className="grid items-center gap-16 md:grid-cols-2">
          <Reveal className="relative w-full max-w-md md:mx-0">
            <div className="absolute inset-0 grad-bg opacity-20 blur-3xl" aria-hidden="true" />
            <Image
              src="/foto-frente.png"
              alt="Fundador da Publiciart"
              width={650}
              height={800}
              className="relative z-10 ml-auto w-3/4 rounded-3xl border border-white/10 shadow-2xl"
            />
            <Image
              src="/foto-perfil.png"
              alt="Fundador da Publiciart"
              width={520}
              height={650}
              className="relative z-20 -mt-24 mr-auto w-1/2 rounded-2xl border-4 border-[var(--bg)] shadow-2xl"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">A história</span>
            <h2 className="display mt-4 text-3xl font-bold md:text-4xl">
              Nasci para deixar negócios com <span className="gradient-text">cara de grandes.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                A Publiciart começou de uma inquietação simples: a maioria dos pequenos negócios tem
                um produto excelente, mas uma presença online que não faz jus a ele. Sites amadores,
                lentos, iguais a milhares de outros.
              </p>
              <p>
                Eu resolvi mudar isso. Um site de cada vez, feito à mão, com identidade própria e
                foco total em transformar quem visita em quem compra. Sem fábrica de site, sem
                atalho — só trabalho bem feito.
              </p>
              <p>
                Hoje, cada projeto que entrego carrega esse compromisso: qualidade premium, suporte
                real e um resultado do qual eu me orgulho de assinar.
              </p>
            </div>
            <p className="mt-8 text-sm text-[var(--muted)]">
              <span className="text-white font-semibold">Edison Gondo</span> · Fundador &amp; Diretor Criativo
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Valores */}
      <section className="relative z-10 border-t border-white/8 py-20 md:py-28">
        <Container>
          <Reveal>
            <span className="eyebrow">No que eu acredito</span>
            <h2 className="display mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
              Os valores que guiam cada <span className="gradient-text">projeto</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="surface flex h-full gap-5 rounded-2xl p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl grad-bg text-[#0a0711]">
                    <v.icon size={22} />
                  </div>
                  <div>
                    <h3 className="display text-lg font-bold">{v.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{v.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
