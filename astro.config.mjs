import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "http://localhost:3000/",
  integrations: [
    tailwind(
      tailwind({
        // Example: Provide a custom path to a Tailwind config file
        config: { path: "./custom-config.cjs" },
      })
    ),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
