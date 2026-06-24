/**
 * Registro de idiomas (i18n).
 *
 * Hoje o site é apenas pt-BR. Para adicionar um idioma:
 *  1. Crie src/content/en-US.ts exportando o mesmo formato de `ptBR`.
 *  2. Registre-o em `dictionaries` abaixo.
 *  3. Troque `defaultLocale` ou implemente seleção por rota/contexto.
 *
 * Os componentes consomem `content` (o dicionário ativo), nunca o arquivo de
 * idioma diretamente. Assim, trocar o idioma é um único ponto de mudança.
 */
import { ptBR, type Dictionary } from "./pt-BR";

export type Locale = "pt-BR";

export const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": ptBR,
};

export const defaultLocale: Locale = "pt-BR";

/** Dicionário ativo usado em todo o site. */
export const content: Dictionary = dictionaries[defaultLocale];

export type { Dictionary };
