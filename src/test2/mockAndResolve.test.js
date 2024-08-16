const { default: axios } = require("axios");
const controller = require("../controller/user");
const { fetchUsersFromAPI } = require("../services/fetchUser");

jest.mock("../services/fetchUser", () => ({
  fetchUsersFromAPI: jest.fn(),
}));
describe("---- mock and resolve value -----", function () {
  it("----------------mocking an api call-----------", async function () {
    let spy;

    const users = [{ id: 1, name: "John Doe" }];

    spy = jest.spyOn(require("../services/fetchUser"), "fetchUsersFromAPI");

    spy.mockResolvedValue(users); // Mock implementation
    const data = await controller.userList();
    expect(data).toEqual(users);
    expect(fetchUsersFromAPI).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });
});
