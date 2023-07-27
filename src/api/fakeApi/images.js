import axios from "axios";

const mainImageUrls = [
  "https://image.dummyjson.com/900x400/e8e5de/ffffff?text=Some+Goods...&fontSize=72",
  "https://image.dummyjson.com/900x400/505044/ffffff?text=Item+Number1!&fontSize=72",
  "https://image.dummyjson.com/900x400/444444/ffffff?text=Item+Number2!&fontSize=72",
];
const mainImages = [];

async function getMainImages() {
  try {
    const requests = mainImageUrls.map((url) =>
      axios.get(url, { responseType: "blob" })
    );
    const responses = await Promise.all(requests);
    const mainImages = responses.map((response) =>
      URL.createObjectURL(response.data)
    );
    return mainImages;
  } catch (error) {
    alert(error);
    return [];
  }
}
async function getCategoriesMainImage(categories) {
  try {
    const requests = categories.map((category) =>
      axios.get(`https://dummyjson.com/products/category/${category.name}`)
    );

    const responses = await Promise.all(requests);
    const images = responses.map(
      (response) => response.data.products[0].images[0]
    );
    return images;
  } catch (error) {
    alert(error);
    return [];
  }
}

export default {
  getMainImages,
  getCategoriesMainImage,
};
