const addToCart = (item) => {
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
    return Promise.resolve(userCart);
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
    return Promise.resolve(newUserCart);
  }
};

const deleteItem = (item) => {
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
    return Promise.resolve(userCart);
  } else {
    localStorage.removeItem("userCart");
    return Promise.resolve(null);
  }
};

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

const deleteAll = () =>
  new Promise((resolve) => {
    localStorage.removeItem("userCart");
    resolve(null);
  });

export default {
  addToCart,
  deleteItem,
  deleteAll,
};
