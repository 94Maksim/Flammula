import API from "../api/index.js";

export const userCartModule = {
  state: () => ({
    userCart: JSON.parse(localStorage.getItem("userCart")) || null,
  }),
  mutations: {
    setUserCart(state, newUserCart) {
      state.userCart = newUserCart;
    },
  },
  actions: {
    async setUserCart(state, item) {
      try {
        const response = await API.carts.addToCart(item);
        state.commit("setUserCart", response);
      } catch (error) {
        alert("Ошибка при обновлении корзины:", error);
      }
    },
    async deleteItem(state, item) {
      try {
        const response = await API.carts.deleteItem(item);
        state.commit("setUserCart", response);
      } catch (error) {
        alert("Ошибка при удалении объекта:", error);
      }
    },
    async deleteUserCart({ commit }) {
      try {
        const response = await API.carts.deleteAll();
        commit("setUserCart", response);
      } catch (error) {
        alert("Ошибка при удалении объекта:", error);
      }
    },
  },
  getters: {
    getItemById: (state) => (id) => {
      if (state.userCart && state.userCart.products) {
        const item = state.userCart.products.find((item) => item.id === id);
        return item || null;
      }
      return null;
    },
  },
  namespaced: true,
};
