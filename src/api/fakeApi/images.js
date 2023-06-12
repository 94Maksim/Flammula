const getMainImage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos/8")
    .then((response) => response.json())
    .then((res) => res);
  const res = await response.data;
  console.log(response);
  return response;
};

export default {
  getMainImage,
};
