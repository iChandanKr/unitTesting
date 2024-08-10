const assert = require("assert");
const { expect } = require("chai");
// const expect = chai.expect;
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
  });
});

describe("myfirst test case", function () {
  const name = "chandan";
  const arr = [1,2,3,4];

  it("index check", function () {
    assert.equal([1, 2, 3].indexOf(3), 2);
  });

  it("this is my second test case", function () {
    // chai
    // chai.expect('foo').to.be.a('String');
    let answer = 78;
    expect(answer).to.be.a("Number");
  });

  it("value check", () => {
    expect(name).to.equal("chandan");
  });

  it('Check array length',()=>{
    expect(arr).to.have.lengthOf(4)
  })

});
