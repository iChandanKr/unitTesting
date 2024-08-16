const { default: axios } = require("axios");
const controller = require("../controller/user");
const service = require("../services/fetchUser");

// const { expect } = require("chai");
// const jest = require("jest");
// jest.mock("axios");

describe("---- mock and resolve value -----", function () {
  it("----------------mocking an api call-----------", async function () {
    // const userService = {
    //   fetchUsersFromAPI: jest.fn()
    // }
    service.fetchUsersFromAPI = jest.fn();

    const users = [{ id: 1, name: "John Doe" }];
    jest.spyOn(controller, "fetchUsersFromAPI").mockImplementation(async (url) => {
      return users;
    });
    jest.spyOn(controller, "userList").mockImplementation(() => users);
    // jest.spyOn(service,'fetchUsersFromAPI').mockResolvedValue(users);
    // jest.spyOn(userController, "fetchUsersFromAPI").mockResolvedValue(users);
    // axios.get.mockResolvedValue(users);
    const api_data = await controller.userList();

    expect(api_data).toEqual(users);
    expect(controller.fetchUsersFromAPI).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});
