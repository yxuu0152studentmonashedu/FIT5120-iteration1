import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  plugins: [tsconfigPaths(), react()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
};