import { productsData } from "./productsData.js";

function getAllProducts() {
  return productsData;
}
function getProductById(id) {
  return productsData.find((product) => product.id === id);
}
function getTopProducts() {
  let topProductsId = [1, 2, 5, 8, 13];
  let topProducts = [];
  topProductsId.forEach((id) => {
    topProducts.push(getProductById(id));
  });
  return topProducts;
}
function getQueryProducts(query) {
  const filteredProduct = productsData.filter((product) =>
    product.name.trim().toLowerCase().includes(query.trim().toLowerCase())
  );
  return filteredProduct;
}

export default {
  getAllProducts,
  getProductById,
  getTopProducts,
  getQueryProducts,
};
