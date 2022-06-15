let chai = require('chai')

let assert = chai.assert

describe("Aspect Check", function(){
    let username = "Test System"
    it("---check string---", function(){
        assert.typeOf(username, "string")
    })
    it("---equal check---", function(){
        assert.equal(username, "Test System")
    })

})