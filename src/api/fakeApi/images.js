import axios from "axios";

const mainImageUrls = [
  "https://image.dummyjson.com/900x400/e8e5de/ffffff?text=Some+Goods...&fontSize=72",
  "https://image.dummyjson.com/900x400/505044/ffffff?text=Item+Number1!&fontSize=72",
  "https://image.dummyjson.com/900x400/444444/ffffff?text=Item+Number2!&fontSize=72",
];
const mainImages = [];

async function getMainImages() {
  const requests = mainImageUrls.map((url) =>
    axios.get(url, { responseType: "blob" })
  );
  Promise.all(requests)
    .then((responses) => {
      responses.forEach((response) => {
        const imageURL = URL.createObjectURL(response.data);
        mainImages.push(imageURL);
      });
    })
    .catch((error) => {
      alert(error);
    });
  return mainImages;
}

export default {
  getMainImages,
};
