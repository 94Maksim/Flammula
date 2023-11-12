import { createStore } from "vuex";
import { overflowModule } from "./overflowModule.js";
import { authModule } from "./authModule.js";
import { userCartModule } from "./userCartModule.js";
import { favoriteModule } from "./favoriteModule.js";

export default createStore({
  modules: {
    overflowModule: overflowModule,
    authModule: authModule,
    userCartModule: userCartModule,
    favoriteModule: favoriteModule,
  },
  namespaced: true,
});
