let sinon = require('sinon')
let chai = require('chai')
let expect = chai.expect

let Student = require('../controllers/studentController')

let stdObj = new Student()

describe('---Stub Check-----', function(){
    it('---function argument check----', function(){
        let stub = sinon.stub(stdObj, 'getExternal')
        stub.withArgs(50).returns(5)
        expect(stdObj.finalMarks(50)).to.be.equal(58)
    })
})