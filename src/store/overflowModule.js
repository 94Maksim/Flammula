export const overflowModule = {
  state: () => ({
    isOverflowHidden: false,
  }),
  mutations: {
    chooseOverflowHidden() {
      this.isOverflowHidden = true;
      document.body.style.overflow = "hidden";
    },
    chooseOverflowAuto() {
      this.isOverflowHidden = false;
      document.body.style.overflow = "auto";
    },
  },
  namespaced: true,
};
