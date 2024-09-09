import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { preset } from "./preset";

import "./main.css";
import "virtual:uno.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: preset,
  },
});

app.mount("#app");
