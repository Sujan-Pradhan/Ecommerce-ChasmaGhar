let chai = require("chai")
let expect = chai.expect;
let sinon = require('sinon')


// describe("Heading One", function(){
  
//     let data = "check"
//     it("check string", function(){
//         expect(data).to.be.a("string")
//     })
//     it.only("value check", function(){
//         expect(data).to.be.equal("check")
//     })
//     it("value check again", function(){
//         expect(data).to.be.equal("data")
//     })
// })
//skip - it holds the test case for

describe("Heading One", function(){
  
    let data = "check"
    it.skip("check string", function(){
        expect(data).to.be.a("string")
    })
    it.skip("value check", function(){
        expect(data).to.be.equal("check")
    })
    it.skip("value check again", function(){
        expect(data).to.be.equal("data")
    })
})