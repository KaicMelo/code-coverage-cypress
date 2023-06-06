import { defineConfig } from "cypress";
import task from "@cypress/code-coverage/task";
// import istanbul from "@cypress/code-coverage/use-browserify-istanbul";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      task(on, config);
      return config;
      // on("task", task);
      // on("file:preprocessor", istanbul);
    },
  },
});
