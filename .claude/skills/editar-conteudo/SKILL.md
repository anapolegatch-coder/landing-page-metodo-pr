---
name: editar-conteudo
description: Boas práticas obrigatórias ao editar este site — todo texto vai no i18n (src/content/pt-BR.ts) e nunca direto no componente; toda cor, fonte e espaçamento vem dos design tokens (src/config/design-tokens.ts) via classes do Tailwind. Use ao alterar textos, preços, cores, links ou o visual de qualquer seção, para manter o projeto organizado e fácil de manter.
---

# Boas práticas ao editar o site

Estas regras mantêm o site organizado, consistente e pronto para virar outros idiomas
no futuro. Siga-as em toda alteração. (O fluxo de branch + PR está na skill
**`fazer-mudanca`** — esta skill é sobre **como** escrever o código certo.)

## Regra 1 — Todo texto vive no i18n

Nenhum componente deve ter texto fixo escrito dentro dele. **Toda** string visível
(títulos, parágrafos, botões, preços, rótulos, FAQ) fica em
[`src/content/pt-BR.ts`](src/content/pt-BR.ts), e o componente lê de lá.

❌ **Errado** — texto fixo no componente:

```tsx
<h2>Escolha seu plano</h2>
<Button>Quero começar</Button>
```

✅ **Certo** — texto vem do `content`:

```tsx
import { content } from "@/content";

const { plans } = content;
// ...
<h2>{plans.title}</h2>
<Button>{plans.cta}</Button>
```

E em `src/content/pt-BR.ts`:

```ts
plans: {
  title: "Escolha seu plano",
  cta: "Quero começar",
},
```

**Para mudar um texto ou preço:** edite só o `src/content/pt-BR.ts`. Quase nunca é
preciso tocar no componente.

**Para adicionar um texto novo:** adicione a chave em `pt-BR.ts` primeiro, depois use
`content.<secao>.<chave>` no componente. O TypeScript já valida que a chave existe.

> Por que: centralizar o texto deixa a Ana mudar copy sem mexer em código, evita erro
> e prepara o site para um `en-US.ts` no futuro (mesmo formato, registrado em
> [`src/content/index.ts`](src/content/index.ts)).

## Regra 2 — Cores, fontes e espaçamentos vêm dos tokens

Nunca escreva uma cor "na mão" (ex: `#22d3ee`, `style={{ color: ... }}`) nos
componentes. Use as classes do Tailwind que derivam de
[`src/config/design-tokens.ts`](src/config/design-tokens.ts).

❌ **Errado:** `<span style={{ color: "#22d3ee" }}>`
✅ **Certo:** `<span className="text-cyan">`

Cores principais disponíveis como classe: `text-cyan` / `bg-cyan`, `text-pink`,
`bg-base` (fundo escuro), além das utilidades de marca em
[`src/app/globals.css`](src/app/globals.css) (ex: `.glass`, `.text-gradient-cyan`).

**Para mudar uma cor/fonte em todo o site:** edite o valor em `design-tokens.ts` — a
mudança se propaga sozinha. Não saia trocando cor componente por componente.

## Regra 3 — Cada seção é um arquivo

Os blocos da página ficam em [`src/components/sections/`](src/components/sections/)
(um arquivo por seção). A ordem das seções na página é definida em
[`src/app/page.tsx`](src/app/page.tsx). Peças reutilizáveis (botão, etiqueta) ficam em
`src/components/ui/` — reutilize-as em vez de recriar.

## Onde mexer para cada tarefa

| Quero mudar...                       | Vá em...                                  |
| ------------------------------------ | ----------------------------------------- |
| Qualquer texto, preço, benefício     | `src/content/pt-BR.ts`                    |
| Cores, fontes, raios, espaçamentos   | `src/config/design-tokens.ts`             |
| Layout de uma seção                  | O arquivo dela em `src/components/sections/` |
| Ordem das seções                     | `src/app/page.tsx`                        |
| Link do WhatsApp / TrainingPeaks     | `links` no fim de `src/content/pt-BR.ts`  |
| Estilos globais e efeitos visuais    | `src/app/globals.css`                     |

## Antes de finalizar

- Rode `npm run build` para garantir que compila (o TypeScript pega chaves de
  conteúdo que não existem).
- Confira no navegador com `npm run dev` se a mudança for visual ou de texto.
- Mantenha o tom da marca: premium, técnico, frases curtas (ver [CONTEXT.md](../../../CONTEXT.md)).
