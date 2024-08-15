const axios = require("axios");

const userList = async (req, res) => {
  console.log("called");
  const data = await axios.get("https://jsonplaceholder.typicode.com/users");
//  return data.data.data.id;
return data;
};

module.exports = {
  userList,
};

// "test-2": "jest \"src/test2/mockAndResolve.test.js\""
