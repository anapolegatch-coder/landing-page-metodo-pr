/**
 * Configuração do Next.js para deploy estático no GitHub Pages.
 *
 * O site é publicado em https://anapolegatch-coder.github.io/landing-page-metodo-pr/
 * Por ser um "project site" (e não um domínio raiz), todos os assets precisam do
 * prefixo do nome do repositório. Em desenvolvimento local o basePath fica vazio.
 *
 * Se um dia o site migrar para domínio próprio (ex: metodopolegatch.com.br),
 * basta limpar a constant `repo` abaixo ou definir BASE_PATH="" no build.
 */
const repo = "landing-page-metodo-pr";
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.BASE_PATH ?? (isProd ? `/${repo}` : "");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  // Garante que o caminho dos assets também receba o prefixo no GitHub Pages.
  assetPrefix: basePath || undefined,
  // GitHub Pages serve melhor com barra final (gera /pagina/index.html).
  trailingSlash: true,
  images: {
    // O otimizador de imagens do Next não roda em export estático.
    unoptimized: true,
  },
  // Expõe o basePath para o código do cliente (ex: links e imagens manuais).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
