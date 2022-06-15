let sinon = require('sinon')
let chai = require('chai')
let expect = chai.expect

let Student = require('../controllers/studentController')

let stdObj = new Student()

describe('---Spies Check-----', function(){
    it('---Test user function', function(){
        expect(stdObj.userId()).to.be.equal(12)
    })
    it("---Function count---", function(){
        let spieObj = sinon.spy(stdObj, "getInfo")
        stdObj.home(5)
        expect(spieObj.calledOnce).to.be.true
    })
})