const sinon = require("sinon");
const { expect } = require("chai");
const Student = require("../controller/student");

const st = new Student();

describe("-------Promise---------", function () {
  
  it("check value of function", function () {
//   expect(st.dbData(40)).to.be.equal(10);
    st.dbData().then(function(res){
        expect(res).to.be.equal(10);
    })
  });
});

