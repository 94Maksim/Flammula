import "./assets/styles/main.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import directives from "./directives/index.js";
import store from "./store";

const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.use(router);
app.use(store)
app.mount("#app");
