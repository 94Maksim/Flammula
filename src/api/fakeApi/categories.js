import axios from "axios";
import API from "../index.js";

async function getListCategories() {
  let categories = [];
  let categoryNames = [];
  let categoryArr = [
    "Смартфоны",
    "Ноутбуки",
    "Парфюмерия",
    "Уход за кожей",
    "Бакалея",
    "Украшения для дома",
    "Мебель",
    "Лучшее",
    "Женские платья",
    "Женская обувь",
    "Мужские рубашки",
    "Мужская обувь",
    "Мужские часы",
    "Женские часы",
    "Женские сумки",
    "Женские украшения",
    "Солнцезащитные очки",
    "Автомобильный",
    "Мотоцикл",
    "Освещение",
  ];
  await axios
    .get("https://dummyjson.com/products/categories")
    .then((response) => (categoryNames = response.data))
    .catch((error) => alert(error));
  categoryNames.forEach((category, index) =>
    categories.push({ name: category, title: categoryArr[index] })
  );
  return categories;
}
async function getCategoriesWithImage() {
  let categoriesList = null;
  let images = null;
  let categories = [];
  await getListCategories().then((response) => (categoriesList = response));
  await API.images
    .getCategoriesMainImage(categoriesList)
    .then((response) => (images = response));

  for (let i = 0; i < categoriesList.length; i++) {
    const object = {
      name: categoriesList[i],
      src: images[i],
    };
    categories.push(object);
  }
  return categories;
}

export default {
  getListCategories,
  getCategoriesWithImage,
};
