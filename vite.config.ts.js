// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import {
  resolve
} from "path";
var vite_config_default = defineConfig(({ mode }) => {
  const name = "document-editor";
  if (mode === "lib") {
    return {
      plugins: [
        cssInjectedByJsPlugin({
          styleId: `${name}-style`,
          topExecutionPriority: true
        }),
        {
          ...typescript({
            tsconfig: "./tsconfig.json",
            include: ["./src/core/engine/**"]
          }),
          apply: "build",
          declaration: true,
          declarationDir: "types/",
          rootDir: "/"
        }
      ],
      build: {
        lib: {
          name,
          fileName: name,
          entry: resolve("C:\\Users\\selva personal\\Documents\\doxx openwriter\\canvas-editor", "src/core/engine/index.ts")
        },
        rollupOptions: {
          output: {
            sourcemap: true
          }
        }
      }
    };
  }
  return {
    plugins: [react()],
    base: `/${name}/`,
    server: {
      host: "0.0.0.0"
    },
    resolve: {
      alias: {
        "@": resolve("C:\\Users\\selva personal\\Documents\\doxx openwriter\\canvas-editor", "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdCdcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICBjb25zdCBuYW1lID0gJ2RvY3VtZW50LWVkaXRvcidcclxuICBpZiAobW9kZSA9PT0gJ2xpYicpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgc3R5bGVJZDogYCR7bmFtZX0tc3R5bGVgLFxyXG4gICAgICAgICAgdG9wRXhlY3V0aW9uUHJpb3JpdHk6IHRydWVcclxuICAgICAgICB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi50eXBlc2NyaXB0KHtcclxuICAgICAgICAgICAgdHNjb25maWc6ICcuL3RzY29uZmlnLmpzb24nLFxyXG4gICAgICAgICAgICBpbmNsdWRlOiBbJy4vc3JjL2NvcmUvZW5naW5lLyoqJ11cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGRlY2xhcmF0aW9uRGlyOiAndHlwZXMvJyxcclxuICAgICAgICAgIHJvb3REaXI6ICcvJ1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBmaWxlTmFtZTogbmFtZSxcclxuICAgICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoXCJDOlxcXFxVc2Vyc1xcXFxzZWx2YSBwZXJzb25hbFxcXFxEb2N1bWVudHNcXFxcZG94eCBvcGVud3JpdGVyXFxcXGNhbnZhcy1lZGl0b3JcIiwgJ3NyYy9jb3JlL2VuZ2luZS9pbmRleC50cycpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgc291cmNlbWFwOiB0cnVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgICBiYXNlOiBgLyR7bmFtZX0vYCxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnMC4wLjAuMCdcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoXCJDOlxcXFxVc2Vyc1xcXFxzZWx2YSBwZXJzb25hbFxcXFxEb2N1bWVudHNcXFxcZG94eCBvcGVud3JpdGVyXFxcXGNhbnZhcy1lZGl0b3JcIiwgJy4vc3JjJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUEsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxXQUFXO0FBQ3hDLFFBQU0sT0FBTztBQUNiLE1BQUksU0FBUyxPQUFPO0FBQ2xCLFdBQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLHNCQUFzQjtBQUFBLFVBQ3BCLFNBQVMsR0FBRztBQUFBLFVBQ1osc0JBQXNCO0FBQUE7QUFBQSxRQUV4QjtBQUFBLGFBQ0ssV0FBVztBQUFBLFlBQ1osVUFBVTtBQUFBLFlBQ1YsU0FBUyxDQUFDO0FBQUE7QUFBQSxVQUVaLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLGdCQUFnQjtBQUFBLFVBQ2hCLFNBQVM7QUFBQTtBQUFBO0FBQUEsTUFHYixPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsVUFDSDtBQUFBLFVBQ0EsVUFBVTtBQUFBLFVBQ1YsT0FBTyxBQUFLLFFBQVEsd0VBQXdFO0FBQUE7QUFBQSxRQUU5RixlQUFlO0FBQUEsVUFDYixRQUFRO0FBQUEsWUFDTixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1yQixTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUM7QUFBQSxJQUNWLE1BQU0sSUFBSTtBQUFBLElBQ1YsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsSUFFUixTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEFBQUssUUFBUSx3RUFBd0U7QUFBQTtBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
