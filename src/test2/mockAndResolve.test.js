const { default: axios } = require("axios");
const userController = require("../controller/user");
const  service  = require("../services/fetchUser");

// const { expect } = require("chai");
// const jest = require("jest");
jest.mock("axios");

describe("---- mock and resolve value -----", function () {
  it("----------------mocking an api call-----------", async function () {
    const userService = {
      fetchUsersFromAPI: jest.fn()
    }

    const users = [{ id: 1, name: "John Doe" }];
    // jest.spyOn(service,'fetchUsersFromAPI').mockImplementation(async(url)=>{
    //   return users;
    // })
    jest.spyOn(service,'fetchUsersFromAPI').mockResolvedValue(users);
    // jest.spyOn(userController, "fetchUsersFromAPI").mockResolvedValue(users);
    // axios.get.mockResolvedValue(users);
    const api_data = await userController.userList();

    expect(api_data).toEqual(users);
    expect(service.fetchUsersFromAPI).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});
