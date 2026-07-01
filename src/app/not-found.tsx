import Link from "next/link";
import { Megaphone, ArrowRight } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { NAV } from "@/lib/site";

export default function NotFound() {
  const quick = NAV.filter((n) => n.href !== "/");
  return (
    <section className="relative z-10 flex min-h-[80vh] items-center py-32">
      <Container className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl grad-bg text-[#0a0711]">
          <Megaphone size={30} />
        </span>

        <p className="display mt-8 text-8xl font-bold leading-none gradient-text md:text-[9rem]">404</p>
        <h1 className="display mt-4 text-3xl font-bold md:text-5xl">Perdemos o sinal.</h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--muted)]">
          A página que você procurou não existe ou mudou de endereço. Mas relaxa — o resto do site
          está inteiro e te esperando.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">
            Voltar ao início <ArrowRight size={18} />
          </Button>
          <Button href="/contato" variant="ghost">
            Falar comigo
          </Button>
        </div>

        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Ou vá direto para</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {quick.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="inline-block rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
