# Landing Page — Método Polegatch

Site de vendas do **Método Polegatch de Treinamento Inteligente**, a assessoria de
ciclismo da Ana Polegatch. É uma página única (landing page) feita para transformar
visitantes em alunos dos planos de acompanhamento ou em leads de consultoria.

> 📖 Quer entender o **porquê** de cada decisão (público, tom, identidade visual,
> arquitetura)? Leia o [CONTEXT.md](CONTEXT.md). Este README é o guia prático de
> **como rodar e como mexer** no projeto.

---

## O que você precisa instalar (só na primeira vez)

1. **Node.js** — o programa que roda o site no seu computador.
   Baixe a versão "LTS" em <https://nodejs.org> e instale normalmente.
   Para conferir se deu certo, abra o terminal e digite:

   ```bash
   node --version
   ```

   Se aparecer um número (ex: `v22.x.x`), está pronto.

2. **As dependências do projeto** — dentro da pasta do projeto, rode uma vez:

   ```bash
   npm install
   ```

---

## Como ver o site no seu computador

Dentro da pasta do projeto, rode:

```bash
npm run dev
```

Depois abra <http://localhost:3000> no navegador. O site recarrega sozinho a cada
alteração que você salvar — não precisa fechar e abrir de novo.

Para **parar**, volte ao terminal e aperte `Ctrl + C`.

---

## Comandos disponíveis

| Comando         | O que faz                                                        |
| --------------- | ---------------------------------------------------------------- |
| `npm run dev`   | Roda o site localmente para você ver e testar mudanças.          |
| `npm run build` | Gera a versão final (de produção). Bom para checar se não quebrou. |
| `npm run start` | Roda a versão final já gerada pelo `build`.                      |
| `npm run lint`  | Verifica o código em busca de erros comuns.                      |

---

## Como o site está organizado

```
src/
├── app/                  # Estrutura base do site (página principal, estilos globais)
├── components/
│   ├── sections/         # Cada bloco da página (Hero, Planos, FAQ...) é um arquivo
│   └── ui/               # Peças reutilizáveis (botões, etiquetas)
├── content/
│   └── pt-BR.ts          # ⭐ TODOS os textos do site ficam aqui
└── config/
    └── design-tokens.ts  # ⭐ Cores, fontes e espaçamentos ficam aqui
```

**As duas regras de ouro:**

- Todo **texto** (títulos, preços, botões) vive em [`src/content/pt-BR.ts`](src/content/pt-BR.ts).
  Nunca escreva texto direto dentro de um componente.
- Toda **cor / fonte / espaçamento** vem de [`src/config/design-tokens.ts`](src/config/design-tokens.ts).

Onde mexer para cada tipo de mudança está detalhado no [CONTEXT.md](CONTEXT.md).

---

## Onde o site fica publicado

O site é hospedado na **Vercel** e atualiza sozinho: quando uma mudança é aprovada e
entra na branch `main` do GitHub, a Vercel publica a nova versão automaticamente.

---

## Mudando o site com a ajuda do Claude

Este projeto tem **skills** prontas para o Claude seguir um fluxo seguro de mudanças.
Você não precisa decorar comandos de Git — é só pedir em português. As skills ficam em
[`.claude/skills/`](.claude/skills/):

- **`fazer-mudanca`** — o passo a passo seguro: cria uma branch separada, faz a
  alteração e abre um Pull Request no GitHub para você **revisar e aprovar** antes de
  ir pro ar. Nada vai direto para o site no ar.
- **`editar-conteudo`** — as boas práticas do projeto (textos no i18n, cores nos
  tokens) para o site continuar organizado e fácil de manter.

Exemplo de pedido: _"Troca o preço do plano Smart para R$ 297 e abre um PR pra eu
aprovar."_
