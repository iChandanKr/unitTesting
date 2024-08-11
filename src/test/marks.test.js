const sinon = require("sinon");
const { expect } = require("chai");
const Student = require("../controller/student");

const st = new Student();

describe("-------stub---------", function () {
  
  it("function with arguments and returned value", function () {
    const stub = sinon.stub(st,'getExternal');
    stub.withArgs(40).returns(5);
    expect(st.finalMarks(40)).to.be.equal(54);
  });
});

