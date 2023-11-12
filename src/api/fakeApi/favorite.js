const addToFavorite = (item) =>
  new Promise((resolve) => {
    const favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite) {
      favorite.products.push(item);
      const sortedProducts = favorite.products.sort(
        (a, b) => b.dateAdded - a.dateAdded
      );
      favorite.products = sortedProducts;

      localStorage.setItem("favorite", JSON.stringify(favorite));
      resolve(favorite);
    } else {
      const newProductsList = [];
      item.dateAdded = Date.now();
      newProductsList.push(item);
      const newFavorite = {
        id: Date.now(),
        products: newProductsList,
      };
      localStorage.setItem("favorite", JSON.stringify(newFavorite));
      resolve(newFavorite);
    }
  });

const deleteItem = (item) =>
  new Promise((resolve) => {
    const favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.filter(
      (product) => product.id !== item.id
    );
    if (favorite.products.length) {
      const sortedProducts = favorite.products.sort(
        (a, b) => b.dateAdded - a.dateAdded
      );
      favorite.products = sortedProducts;

      localStorage.setItem("favorite", JSON.stringify(favorite));
      resolve(favorite);
    } else {
      localStorage.removeItem("favorite");
      resolve(null);
    }
  });
const deleteAll = () =>
  new Promise((resolve) => {
    localStorage.removeItem("favorite");
    resolve(null);
  });

export default {
  addToFavorite,
  deleteItem,
  deleteAll,
};
