const sinon = require("sinon");
const { expect } = require("chai");
const Student = require("../controller/student");

const st = new Student();

describe("-------syp---------", function () {
  it("test user function", function () {
    expect(st.userId()).to.be.equal(12);
  });

//   it("function count", function () {
//     const spyObj = sinon.spy(st,'getInfo');
//     st.home(5);
//     // expect(spyObj.calledOnce).to.be.true;
//     expect(spyObj.callCount).to.be.equal(2);

//   });

  it("function arguments", function () {
    const spyObj = sinon.spy(st,'getInfo');
    st.home(5);
    expect(spyObj.calledWith(5)).to.be.true;

  });
});

