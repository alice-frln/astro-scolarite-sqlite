import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import auth from "auth-astro";

export default defineConfig({
  output: "server",
  site: "https://scolarite.alice-frelin.fr",

  adapter: node({
    mode: "standalone"
  }),

  integrations: [auth()]
});