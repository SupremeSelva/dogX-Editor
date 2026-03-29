// vite.config.ts
import { defineConfig } from "file:///C:/Users/selva%20personal/Documents/doxx%20openwriter/canvas-editor/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/selva%20personal/Documents/doxx%20openwriter/canvas-editor/node_modules/@vitejs/plugin-react/dist/index.js";
import typescript from "file:///C:/Users/selva%20personal/Documents/doxx%20openwriter/canvas-editor/node_modules/@rollup/plugin-typescript/dist/es/index.js";
import cssInjectedByJsPlugin from "file:///C:/Users/selva%20personal/Documents/doxx%20openwriter/canvas-editor/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\Users\\selva personal\\Documents\\doxx openwriter\\canvas-editor";
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
          entry: path.resolve(__vite_injected_original_dirname, "src/core/engine/index.ts")
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
    base: "/",
    server: {
      host: "0.0.0.0"
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxzZWx2YSBwZXJzb25hbFxcXFxEb2N1bWVudHNcXFxcZG94eCBvcGVud3JpdGVyXFxcXGNhbnZhcy1lZGl0b3JcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHNlbHZhIHBlcnNvbmFsXFxcXERvY3VtZW50c1xcXFxkb3h4IG9wZW53cml0ZXJcXFxcY2FudmFzLWVkaXRvclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvc2VsdmElMjBwZXJzb25hbC9Eb2N1bWVudHMvZG94eCUyMG9wZW53cml0ZXIvY2FudmFzLWVkaXRvci92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHR5cGVzY3JpcHQgZnJvbSAnQHJvbGx1cC9wbHVnaW4tdHlwZXNjcmlwdCdcclxuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICBjb25zdCBuYW1lID0gJ2RvY3VtZW50LWVkaXRvcidcclxuICBpZiAobW9kZSA9PT0gJ2xpYicpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBjc3NJbmplY3RlZEJ5SnNQbHVnaW4oe1xyXG4gICAgICAgICAgc3R5bGVJZDogYCR7bmFtZX0tc3R5bGVgLFxyXG4gICAgICAgICAgdG9wRXhlY3V0aW9uUHJpb3JpdHk6IHRydWVcclxuICAgICAgICB9KSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAuLi50eXBlc2NyaXB0KHtcclxuICAgICAgICAgICAgdHNjb25maWc6ICcuL3RzY29uZmlnLmpzb24nLFxyXG4gICAgICAgICAgICBpbmNsdWRlOiBbJy4vc3JjL2NvcmUvZW5naW5lLyoqJ11cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICAgICAgICBkZWNsYXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGRlY2xhcmF0aW9uRGlyOiAndHlwZXMvJyxcclxuICAgICAgICAgIHJvb3REaXI6ICcvJ1xyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgYnVpbGQ6IHtcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICBmaWxlTmFtZTogbmFtZSxcclxuICAgICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvcmUvZW5naW5lL2luZGV4LnRzJylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICBzb3VyY2VtYXA6IHRydWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICAgIGJhc2U6ICcvJyxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBob3N0OiAnMC4wLjAuMCdcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStYLFNBQVMsb0JBQW9CO0FBQzVaLE9BQU8sV0FBVztBQUNsQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLDJCQUEyQjtBQUNsQyxZQUFZLFVBQVU7QUFKdEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxPQUFPO0FBQ2IsTUFBSSxTQUFTLE9BQU87QUFDbEIsV0FBTztBQUFBLE1BQ0wsU0FBUztBQUFBLFFBQ1Asc0JBQXNCO0FBQUEsVUFDcEIsU0FBUyxHQUFHLElBQUk7QUFBQSxVQUNoQixzQkFBc0I7QUFBQSxRQUN4QixDQUFDO0FBQUEsUUFDRDtBQUFBLFVBQ0UsR0FBRyxXQUFXO0FBQUEsWUFDWixVQUFVO0FBQUEsWUFDVixTQUFTLENBQUMsc0JBQXNCO0FBQUEsVUFDbEMsQ0FBQztBQUFBLFVBQ0QsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsZ0JBQWdCO0FBQUEsVUFDaEIsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxLQUFLO0FBQUEsVUFDSDtBQUFBLFVBQ0EsVUFBVTtBQUFBLFVBQ1YsT0FBWSxhQUFRLGtDQUFXLDBCQUEwQjtBQUFBLFFBQzNEO0FBQUEsUUFDQSxlQUFlO0FBQUEsVUFDYixRQUFRO0FBQUEsWUFDTixXQUFXO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQVUsYUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDdEM7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
