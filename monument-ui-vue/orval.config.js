import { defineConfig } from "orval";

export default defineConfig({
  monumentApi: {
    input: "http://localhost:3000/swagger/swagger.json",
    output: {
      client: "vue-query",
      target: "./src/monument-api.ts",
      baseUrl: "http://localhost:3000",
    },
  },
});