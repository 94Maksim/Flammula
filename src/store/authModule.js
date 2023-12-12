import API from "../api/fakeApi/index";

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
    logout({ commit, dispatch }) {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      commit("changeAuthStatus", false);
      commit("changeUser", null);
      dispatch("favoriteModule/deleteFavorite", null, { root: true });
      dispatch("userCartModule/deleteUserCart", null, { root: true });
    },
    registerUser(state, userData) {
      state.commit("changeLoadingStatus");
      API.auth.registerUser(userData).then((response) => {
        if (response) {
          console.log(response);
          if (typeof response !== "number") {
            state.commit("changeUser", response);
            state.commit("changeAuthStatus", true);
            localStorage.setItem("user", JSON.stringify(response));
            localStorage.setItem("isAuth", true);
          } else state.commit("setError", "Ошибка регистрации");
        }
        state.commit("changeLoadingStatus");
      });
    },
  },
  namespaced: true,
};
