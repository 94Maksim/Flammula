import axios from "axios";

async function getAuth(obj) {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: obj.login,
      password: obj.passwordLogIn,
      // expiresInMins: 60, // optional
    });
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}
async function registerUser(userData) {
  try {
    const response = await axios.post(
      "https://dummyjson.com/users/add",
      userData
    );
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}

export default {
  getAuth,
  registerUser,
};
