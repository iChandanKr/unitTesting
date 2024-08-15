const axios = require('axios');

const fetchUsersFromAPI = async (url) => {
    const response = await axios.get(url);
    // console.log(response.data)
    return response.data;
  };

  module.exports = {fetchUsersFromAPI};