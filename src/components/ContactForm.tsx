"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { WA } from "@/lib/site";

export default function ContactForm() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const texto = `Olá! Meu nome é ${nome || "[não informado]"}.\n\n${
      mensagem || "Gostaria de conversar sobre um site."
    }\n\nMeu contato: ${contato || "[não informado]"}`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[var(--violet)]";

  return (
    <form onSubmit={handleSubmit} className="surface rounded-3xl p-7 md:p-9">
      <div className="space-y-4">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm text-[var(--muted)]">
            Seu nome
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Como posso te chamar?"
            className={field}
            required
          />
        </div>
        <div>
          <label htmlFor="contato" className="mb-1.5 block text-sm text-[var(--muted)]">
            WhatsApp ou e-mail
          </label>
          <input
            id="contato"
            type="text"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
            placeholder="Onde eu te retorno?"
            className={field}
            required
          />
        </div>
        <div>
          <label htmlFor="mensagem" className="mb-1.5 block text-sm text-[var(--muted)]">
            Sobre o projeto
          </label>
          <textarea
            id="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Me conta um pouco do seu negócio e do que você precisa."
            rows={4}
            className={`${field} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full grad-bg px-6 py-3.5 font-semibold text-[#0a0711] transition hover:brightness-110"
      >
        Enviar pelo WhatsApp <Send size={17} />
      </button>
      <p className="mt-3 text-center text-xs text-[var(--muted)]">
        O botão abre uma conversa no WhatsApp já com sua mensagem escrita.
      </p>
    </form>
  );
}
