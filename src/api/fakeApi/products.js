import axios from "axios";

const newArrivalsCategory = [
  "https://dummyjson.com/products/1",
  "https://dummyjson.com/products/10",
  "https://dummyjson.com/products/29",
  "https://dummyjson.com/products/36",
  "https://dummyjson.com/products/45",
];

async function getProductsByCategory(category) {
  let products = [];
  if (category !== "newArrivals") {
    await axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => (products = response.data.products))
      .catch((error) => alert(error));
  } else {
    const requests = newArrivalsCategory.map((element) => axios.get(element));
    await Promise.all(requests)
      .then((responses) => {
        responses.forEach((element) => {
          products.push(element.data);
        });
      })
      .catch((error) => alert(error));
  }
  return products;
}
async function getProductById(id) {
  let product = null;
  await axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((response) => (product = response.data))
    .catch((error) => alert(error));
  return product;
}
async function getQueryProducts(query) {
  let products = null;
  await axios
    .get(`https://dummyjson.com/products/search?q=${query}`)
    .then((response) => (products = response.data.products))
    .catch((error) => alert(error));
  return products;
}

export default {
  getProductsByCategory,
  getProductById,
  getQueryProducts,
};
