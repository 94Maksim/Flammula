import API from "../api/index.js";

export const authModule = {
  state: () => ({
    isAuth: localStorage.getItem("isAuth") || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    error: null,
    isLoading: false,
  }),
  mutations: {
    changeUser(state, newUser) {
      state.user = newUser;
    },
    changeAuthStatus(state, bool) {
      state.isAuth = bool;
    },
    changeLoadingStatus(state) {
      state.isLoading = !state.isLoading;
    },
    setError(state, newError) {
      state.error = newError;
    },
    deleteError(state) {
      state.error = null;
    },
  },
  actions: {
    getAuth(state, obj) {
      state.commit("changeLoadingStatus");
      API.auth.getAuth(obj).then((response) => {
        if (response) {
          if (typeof response !== "number") {
            state.commit("changeUser", response);
            state.commit("changeAuthStatus", true);
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("isAuth", true);
          } else state.commit("setError", "Неверный логин или пароль");
        }
        state.commit("changeLoadingStatus");
      });
    },
    deleteError(state) {
      state.commit("deleteError");
    },
    logout(state) {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      state.commit("changeAuthStatus", false);
      state.commit("changeUser", null);
    },
  },
  namespaced: true,
};
