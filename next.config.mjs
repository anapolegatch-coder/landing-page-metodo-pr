/**
 * Configuração do Next.js.
 *
 * O site é hospedado na Vercel, que detecta o Next.js automaticamente, roda
 * `next build` e serve o app na raiz do domínio. Não é necessário basePath,
 * export estático ou assetPrefix: a Vercel cuida do build e do deploy nativamente.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // O subdomínio guia.polegatchride.com abre direto a página de captura.
  // "beforeFiles" é necessário porque "/" já existe (a landing page).
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "guia.polegatchride.com" }],
          destination: "/guia",
        },
      ],
    };
  },
};

export default nextConfig;
