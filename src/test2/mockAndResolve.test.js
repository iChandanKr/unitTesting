const { default: axios } = require("axios");
const { userList } = require("../controller/user");
// const { expect } = require("chai");
// const jest = require("jest");
jest.mock("axios");

describe("---- mock and resolve value -----", function () {
  it("----------------mocking an api call-----------", async function () {

    const users = [{ id: 1, name: "John Doe" }];
    axios.get.mockResolvedValue(users);
    const api_data = await userList();
    expect(api_data).toEqual(users);
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
  });
});
