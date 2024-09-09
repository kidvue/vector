import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

const preset = definePreset(Aura, {
  primitive: {
    "mountain-meadow": {
      "50": "#eefbf4",
      "100": "#d6f5e2",
      "200": "#b1e9ca",
      "300": "#7ed7ac",
      "400": "#42b883",
      "500": "#27a26f",
      "600": "#188359",
      "700": "#136949",
      "800": "#12533c",
      "900": "#104432",
      "950": "#08261c",
    },
  },
  sematics: {
    primary: {
      50: "{mountain-meadow.50}",
      100: "{mountain-meadow.100}",
      200: "{mountain-meadow.200}",
      300: "{mountain-meadow.300}",
      400: "{mountain-meadow.400}",
      500: "{mountain-meadow.500}",
      600: "{mountain-meadow.600}",
      700: "{mountain-meadow.700}",
      800: "{mountain-meadow.800}",
      900: "{mountain-meadow.900}",
      950: "{mountain-meadow.950}",
    },
  },
});
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: preset,
  },
});

app.mount("#app");
