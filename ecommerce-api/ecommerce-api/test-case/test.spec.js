let chai = require('chai')

let assert = chai.assert
let should = chai.should()
let expect = chai.expect

//should
describe("Should Check", function(){
    let userName = "Bikash"
    it("---check string should", function(){
        userName.should.be.a('string')
    })
    it("---check equal should", function(){
        userName.should.equal('Bikash')
    })
})

//expect
describe("Expect Check", function(){
    let userName = "Bikash"
    it("---String match---", function(){
        expect(userName).to.be.a('string')
    })
    it("----equal match----", function(){
        expect(userName).to.equal("Bikash")
    })
})
