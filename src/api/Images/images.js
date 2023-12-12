import { imagesData } from "./ImagesData.js";

function getImageById(id) {
  const image = imagesData.find((el) => el.id === id).paths[0];
  return image;
}

export default {
  getImageById,
};
