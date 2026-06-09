import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/outofbox-portfolio/",
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
