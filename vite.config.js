import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
<<<<<<< HEAD

  },
=======
  },
  server: {
    host: true,
    port: 3000,
    open: true,
  }
>>>>>>> aa008a3119fc915677e5b59f8dddead30d440892
})