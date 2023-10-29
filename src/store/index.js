import { createStore } from "vuex";
import { overflowModule } from "./overflowModule.js";
import { authModule } from "./authModule.js";

export default createStore({
  modules: {
    overflowModule: overflowModule,
    authModule: authModule,
  },
  namespaced: true,
});
