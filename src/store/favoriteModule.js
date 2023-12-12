import API from "../api/fakeApi/index.js"

export const favoriteModule = {
  state: () => ({
    favorite: JSON.parse(localStorage.getItem("favorite")) || null,
  }),
  mutations: {
    setFavorite(state, newFavorite) {
      state.favorite = newFavorite;
    },
  },
  actions: {
    async setFavorite({ commit }, item) {
      try {
        const response = await API.favorite.addToFavorite(item);
        commit("setFavorite", response);
      } catch (error) {
        alert("Ошибка при обновлении избранного:", error);
      }
    },
    async deleteItem(state, item) {
      try {
        const response = await API.favorite.deleteItem(item);
        state.commit("setFavorite", response);
      } catch (error) {
        alert("Ошибка при удалении объекта:", error);
      }
    },
    async deleteFavorite({ commit }) {
      try {
        const response = await API.favorite.deleteAll();
        commit("setFavorite", response);
      } catch (error) {
        alert("Ошибка при удалении объекта:", error);
      }
    },
  },
  getters: {
    getItemById: (state) => (id) => {
      if (state.favorite) {
        const item = state.favorite.products.find((item) => item.id === id);
        return item || null;
      }
      return null;
    },
  },
  namespaced: true,
};
