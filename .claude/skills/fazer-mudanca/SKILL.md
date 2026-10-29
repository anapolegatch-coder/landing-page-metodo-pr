---
name: fazer-mudanca
description: Fluxo seguro para qualquer alteração no site (textos, preços, cores, seções, links, correções). Use SEMPRE que for modificar o código deste projeto. Garante que a mudança seja feita numa branch separada e enviada como Pull Request no GitHub para revisão e aprovação manual — nunca direto na main, nunca com merge automático.
---

# Fazer uma mudança no site (com revisão no GitHub)

A Ana **não é desenvolvedora**. O objetivo desta skill é que toda alteração siga um
caminho seguro: trabalhar numa branch separada e abrir um Pull Request (PR) no GitHub
para ela revisar e aprovar com calma antes de o site no ar mudar.

## Regras inegociáveis

1. **Nunca** faça commit direto na branch `main`. Sempre crie uma branch nova.
2. **Nunca** dê merge sozinho. Quem aprova e dá merge é a Ana, pelo GitHub.
3. **Não** force push, não reescreva histórico, não delete branches do outro.
4. Antes de mexer no código, leia e siga a skill **`editar-conteudo`** (textos no
   i18n, cores nos design tokens). Manter o padrão é parte da tarefa.
5. Fale com a Ana em português, de forma simples. Evite jargão de programador.

## Passo a passo

### 1. Comece a partir da main atualizada

```bash
git checkout main
git pull
```

### 2. Crie uma branch com nome descritivo

Use um prefixo que indique o tipo da mudança e um nome curto em kebab-case:

- `feat/` — algo novo (ex: `feat/secao-depoimentos`)
- `fix/` — correção (ex: `fix/link-whatsapp`)
- `content/` — só texto/preço (ex: `content/preco-plano-smart`)
- `style/` — visual/cores (ex: `style/ajuste-cor-botao`)

```bash
git checkout -b content/preco-plano-smart
```

### 3. Faça a alteração

Aplique a mudança seguindo as boas práticas da skill **`editar-conteudo`**.
Mude só o necessário para a tarefa pedida — nada de "limpezas" não solicitadas.

### 4. Confira que não quebrou

Rode o build para garantir que o site ainda compila:

```bash
npm run build
```

Se houver erro, conserte antes de seguir. Se a mudança for visual ou de conteúdo,
vale também rodar `npm run dev` e conferir em <http://localhost:3000>.

### 5. Faça commit em português

Mensagem curta e clara descrevendo **o que** mudou:

```bash
git add -A
git commit -m "Atualiza preço do plano Smart para R$ 297"
```

### 6. Envie a branch e abra o Pull Request

```bash
git push -u origin content/preco-plano-smart
gh pr create --base main --fill
```

Use um título claro e, na descrição do PR, explique em linguagem simples:
- **O que mudou** (ex: "preço do plano Smart de R$ 247 para R$ 297").
- **Onde ver** (a Vercel cria um link de preview no PR; aponte isso para a Ana).

**Não** use `--auto`, **não** faça merge. Pare aqui.

### 7. Avise a Ana

Mande o link do PR e explique o que ela precisa fazer:

> "Pronto! Abri o PR aqui: <link>. Dá uma olhada, a Vercel gera um link de preview
> dentro dele pra você ver como ficou. Se estiver bom, é só clicar em **Merge** lá no
> GitHub que o site no ar atualiza sozinho. Se quiser ajustar algo, me avisa."

## Erros comuns a evitar

- Editar texto direto no componente em vez de em `src/content/pt-BR.ts`.
- Usar cor "na mão" (ex: `#22d3ee`) em vez do token do Tailwind (ex: `text-cyan`).
- Esquecer de rodar `npm run build` e mandar um PR que não compila.
- Dar merge sozinho — isso tira a etapa de revisão, que é o ponto de todo o fluxo.
