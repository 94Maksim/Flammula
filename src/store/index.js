import { createStore } from "vuex";
import { overflowModule } from "./overflowModule.js";
import { authModule } from "./authModule.js";
import { userCartModule } from "./userCartModule.js";

export default createStore({
  modules: {
    overflowModule: overflowModule,
    authModule: authModule,
    userCartModule: userCartModule,
  },
  namespaced: true,
});
