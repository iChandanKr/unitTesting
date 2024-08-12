const sinon = require("sinon");
const { expect } = require("chai");
const Student = require("../controller/student");

const st = new Student();

describe("-------mock---------", function () {
  
  it("count function ", function () {
    const mock = sinon.mock(st);
    const expt = mock.expects('getExternal');
    expt.exactly(1);
    expt.withArgs(40);
    st.finalMarks(40);
    expt.verify() 
  });
});

