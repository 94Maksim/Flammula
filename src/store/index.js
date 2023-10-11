import { createStore } from "vuex";
import { overflowModule } from "./overflowModule.js";

export default createStore({
  modules: {
    overflowModule: overflowModule,
  },
});
