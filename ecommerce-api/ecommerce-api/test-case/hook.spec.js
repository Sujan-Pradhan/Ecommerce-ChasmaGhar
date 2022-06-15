let chai = require("chai")
let expect = chai.expect;
let sinon = require('sinon')


describe("Heading One", function(){
    after(function(){
        console.log("...First execute.....")
    })
    before(function(){
        console.log(".......last execute.....")
    })
    afterEach(function(){
        console.log("....after every test case.......")
    })
    this.beforeEach(function(){
        console.log(".....before every test case......")
    })
    let data = "check"
    it("check string", function(){
        expect(data).to.be.a("string")
    })
    it("value check", function(){
        expect(data).to.be.equal("check")
    })
})