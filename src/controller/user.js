const axios = require("axios");
const { fetchUsersFromAPI } = require("../services/fetchUser");
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
// const fetchUsersFromAPI = async (url) => {
//   const response = await axios.get(url);
//   // console.log(response.data)
//   return response.data;
// };


const userList = async (req, res) => {
  try {
    const users = await fetchUsersFromAPI(apiUrl);
    console.log(users)
    return users;
  } catch (error) {
    // throw new Error("Failed to fetch users");
  }
};

// userList()
module.exports = {
  userList,
  // fetchUsersFromAPI
};

// "test-2": "jest \"src/test2/mockAndResolve.test.js\""
