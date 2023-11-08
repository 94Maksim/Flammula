import axios from "axios";

const addToCart = (item) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const userCart = JSON.parse(localStorage.getItem("userCart"));
      if (userCart) {
        const theSameItem = userCart.products.find((i) => i.id === item.id);
        if (theSameItem) {
          theSameItem.quantity = item.quantity;
          const filteredUserProducts = userCart.products.filter(
            (i) => i.id !== item.id
          );
          filteredUserProducts.push(theSameItem);
          userCart.products = filteredUserProducts;
        } else {
          item.dateAdded = Date.now();
          userCart.products.push(item);
        }
        calculateUserCart(userCart);
        const sortedProducts = userCart.products.sort(
          (a, b) => b.dateAdded - a.dateAdded
        );
        userCart.products = sortedProducts;

        localStorage.setItem("userCart", JSON.stringify(userCart));
        resolve(userCart);
      } else {
        const newProductsList = [];
        item.dateAdded = Date.now();
        newProductsList.push(item);
        const newUserCart = {
          id: Date.now(),
          products: newProductsList,
          totalProducts: 1,
          totalQuantity: 1,
          total: item.price,
          discountedTotal: Math.round(
            item.price - (item.price * item.discountPercentage) / 100
          ),
        };
        localStorage.setItem("userCart", JSON.stringify(newUserCart));
        resolve(newUserCart);
      }
    }, 200);
  });
const deleteItem = (item) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      const userCart = JSON.parse(localStorage.getItem("userCart"));
      userCart.products = userCart.products.filter(
        (product) => product.id !== item.id
      );
      if (userCart.products.length) {
        calculateUserCart(userCart);
        const sortedProducts = userCart.products.sort(
          (a, b) => b.dateAdded - a.dateAdded
        );
        userCart.products = sortedProducts;

        localStorage.setItem("userCart", JSON.stringify(userCart));
        resolve(userCart);
      } else {
        localStorage.removeItem("userCart");
        resolve(null);
      }
    }, 200);
  });
function calculateUserCart(userCart) {
  userCart.totalProducts = userCart.products.length;

  const quantitiesArr = userCart.products.map((product) => product.quantity);
  const totalPriceArr = userCart.products.map(
    (product) => product.price * product.quantity
  );
  const discountedTotalArr = userCart.products.map((product) => {
    const discountedPrice = Math.round(
      product.price - (product.price * product.discountPercentage) / 100
    );
    return discountedPrice * product.quantity;
  });

  userCart.totalQuantity = quantitiesArr.reduce(
    (acc, current) => acc + current
  );
  userCart.total = totalPriceArr.reduce((acc, current) => acc + current);
  userCart.discountedTotal = discountedTotalArr.reduce(
    (acc, current) => acc + current
  );
  return userCart;
}

export default {
  addToCart,
  deleteItem,
};
