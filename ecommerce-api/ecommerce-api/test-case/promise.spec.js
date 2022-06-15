let sinon = require('sinon')
let chai = require('chai')
let expect = chai.expect

let Student = require('../controllers/studentController')

let stdObj = new Student()
const chaiPromise = require('chai-as-promised')
chai.use(chaiPromise)

describe('---Promise Check-----', function(){
    it('---Normal Check test----', function(done){
        stdObj.myData().then(function(result){
            expect(result).to.be.equal(10)
            done()
        })
    })
    it("chai Promise value check", function(){
        return expect(stdObj.myData()).to.be.eventually.equal(10)
    })
})