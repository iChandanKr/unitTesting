const { expect } = require("chai");
describe("------hooks-----", function () {
  before(function () {
    console.log("======before==========");
  });
  after(function () {
    console.log("======after==========");
  });
  beforeEach(function () {
    console.log("======beforeEach==========");
  });

  afterEach(function () {
    console.log("======afterEach==========");
  });


  let data = 'code';
  it("----- check strig ------", function () {
    expect(data).to.be.a('String');
  });

  it("----- check value ------", function () {
    expect(data).to.be.equal('code');
  });
});
