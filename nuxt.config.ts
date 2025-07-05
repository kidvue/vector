import {
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
  presetWind4,
} from "unocss";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@unocss/nuxt"],
  unocss: {
    presets: [presetWind4()],
    transformers: [
      transformerDirectives(),
      transformerVariantGroup(),
      transformerCompileClass(),
    ],
  },
  srcDir: "src",
});
