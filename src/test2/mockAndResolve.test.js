const { default: axios } = require("axios");
const { userList } = require("../controller/user");
// const { expect } = require("chai");
// const jest = require("jest");
jest.mock("axios");

describe("---- mock and resolve value -----", function () {
  it("----------------mocking an api call-----------", async function () {
    // const api_data = await userList();

    const user = {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: [Object],
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Johns Group",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
    };

    const res = { data: { page: 1, perPage: 6, data: user } };
    // console.log(res);
    axios.get.mockResolvedValue(res);
    const api_data = await userList();
    expect(api_data).toEqual(7);
  });
});
