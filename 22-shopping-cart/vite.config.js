import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: true,
            },
          ],
        ],
      },
    }),
    {
      name: "@styled/typescript-styled-plugin",
      tags: ["styled", "css", "sty"],
    },
  ],
});
