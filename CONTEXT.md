# Contexto do Projeto — Landing Page Método Polegatch

Documento de referência para qualquer pessoa (ou IA) que for desenvolver este
site no futuro. Leia antes de mexer no código.

---

## O que é

Landing page de vendas do **Método Polegatch de Treinamento Inteligente**, a
assessoria de ciclismo da Ana Polegatch (Polegatch Ride, em transição para PR Club).
O objetivo da página é converter ciclistas amadores de alto desempenho e alto poder
aquisitivo em alunos dos planos de acompanhamento (PR Smart, Expert, Advanced) ou em
leads de consultoria.

**Público:** ciclista exigente, conhece métricas (FTP, TSS, potência). A página deve
soar premium, tecnológica, smooth e um pouco irreverente. Nunca básica.

---

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** para estilo
- **Export estático** (`output: "export"`) — o site é HTML/CSS/JS puro no final
- Deploy automático no **GitHub Pages** via **GitHub Actions**

Não há backend. A "área logada" (dashboard e chat coach) é um **mockup visual**
na seção `AppShowcase`, apenas ilustrativo. Não existe autenticação real.

---

## Como rodar localmente

```bash
npm install      # primeira vez
npm run dev      # ambiente de desenvolvimento em http://localhost:3000
npm run build    # gera o site estático na pasta out/
```

> Requer Node.js. Foi desenvolvido com Node 26 e npm 11.

---

## Arquitetura de pastas

```
src/
├── app/
│   ├── layout.tsx        # HTML raiz, fontes (Inter + JetBrains Mono), metadata
│   ├── page.tsx          # Monta as seções na ordem da jornada de conversão
│   └── globals.css       # Estilos base, glassmorphism, glows, reveal-on-scroll
│
├── components/
│   ├── Header.tsx        # Header fixo com navegação por âncoras
│   ├── sections/         # Uma seção da página por arquivo
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Methodology.tsx
│   │   ├── Plans.tsx
│   │   ├── Consulting.tsx
│   │   ├── About.tsx
│   │   ├── Faq.tsx
│   │   ├── AppShowcase.tsx
│   │   └── Footer.tsx
│   └── ui/               # Peças reutilizáveis (Badge, Button, Reveal)
│
├── content/
│   ├── pt-BR.ts          # ⭐ TODAS as strings do site (i18n)
│   └── index.ts          # Registro de idiomas; exporta `content` (dicionário ativo)
│
└── config/
    └── design-tokens.ts  # ⭐ Cores, fontes, espaçamentos, raios (fonte única)
```

---

## Onde mexer para cada tipo de mudança

| Quero mudar...                         | Vá em...                                   |
| -------------------------------------- | ------------------------------------------ |
| Qualquer texto, preço, benefício       | `src/content/pt-BR.ts`                     |
| Cores, fontes, raios, espaçamentos     | `src/config/design-tokens.ts`              |
| Layout/estrutura de uma seção          | O arquivo correspondente em `sections/`    |
| Ordem das seções                       | `src/app/page.tsx`                         |
| Link do WhatsApp / TrainingPeaks       | `links` no fim de `src/content/pt-BR.ts`   |
| Estilos globais e efeitos visuais      | `src/app/globals.css`                      |

**Regra de ouro:** nenhum componente tem texto fixo. Tudo passa por `content`.
E nenhuma cor solta nos componentes além dos tokens (use as classes do Tailwind
que derivam de `design-tokens.ts`: `text-cyan`, `bg-base`, `text-pink`, etc.).

---

## i18n (internacionalização)

Hoje o site é só pt-BR, mas já está preparado para mais idiomas:

1. Crie `src/content/en-US.ts` exportando o mesmo formato de `ptBR`.
2. Registre em `dictionaries` dentro de `src/content/index.ts`.
3. Troque `defaultLocale` ou implemente seleção por rota.

Os componentes importam `content` de `@/content`, nunca o arquivo de idioma direto.

---

## Identidade visual (resumo)

- **Fundo principal:** `#020617` (dark navy), com glows ambiente ciano e rosa.
- **Acento ciano** (`#22d3ee` / `#00e5ff`): tecnologia, ciência, ação, métricas ideais.
- **Acento rosa** (`#ec4899`): dor, contraste, elementos cruciais.
- **Glassmorphism:** classe `.glass` (fundo translúcido + blur + borda sutil).
- **Tipografia:** Inter (UI/texto), JetBrains Mono (`font-mono`, dados e etiquetas).
- **Cantos:** muito arredondados (`rounded-[2rem]`, `rounded-[3rem]`) para aspecto premium.
- **Seções:** respiro generoso (`py-24`).

Detalhes completos em `src/config/design-tokens.ts`.

---

## Deploy

O deploy é **automático**: todo push na branch `main` dispara o workflow
`.github/workflows/deploy.yml`, que faz o build estático e publica no GitHub Pages.

- **URL de produção:** https://anapolegatch-coder.github.io/landing-page-metodo-pr/
- Por ser um "project site", o `next.config.mjs` define `basePath` com o nome do
  repositório. Se migrar para domínio próprio, ajuste o `basePath` lá (ou defina
  a variável `BASE_PATH=""` no build).

---

## Pendências e próximos passos sugeridos

- [ ] Substituir o número de WhatsApp placeholder em `content.links.whatsapp`.
- [ ] Adicionar foto real da Ana na seção `About`.
- [ ] Avaliar transição de nomenclatura Polegatch Ride → PR Club nas copies.
- [ ] (Opcional) Integrar formulário de qualificação de lead real.
- [ ] (Opcional) Tornar o chat coach e o dashboard funcionais (hoje são mockup).
