import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

export const preset = definePreset(Aura, {
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
    colorScheme: {
      light: {
        surface: {
          0: "#fff",
          50: "{neutral.50}",
          100: "{neutral.100}",
          200: "{neutral.200}",
          300: "{neutral.300}",
          400: "{neutral.400}",
          500: "{neutral.500}",
          600: "{neutral.600}",
          700: "{neutral.700}",
          800: "{neutral.800}",
          900: "{neutral.900}",
          950: "{neutral.950}",
        },
      },
      dark: {
        surface: {
          0: "#000",
          50: "{neutral.50}",
          100: "{neutral.100}",
          200: "{neutral.200}",
          300: "{neutral.300}",
          400: "{neutral.400}",
          500: "{neutral.500}",
          600: "{neutral.600}",
          700: "{neutral.700}",
          800: "{neutral.800}",
          900: "{neutral.900}",
          950: "{neutral.950}",
        },
      },
    },
  },
});
