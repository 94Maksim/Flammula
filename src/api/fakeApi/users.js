import axios from "axios";

async function getUserById(id) {
  let user = null;
  await axios
    .get(`https://dummyjson.com/users/${id}`)
    .then((response) => (user = response.data))
    .catch((error) => alert(error));
  return user;
}

export default {
  getUserById,
};
