let sinon = require('sinon')
let chai = require('chai')
let expect = chai.expect

let Student = require('../controllers/studentController')

let stdObj = new Student()

describe('---Mock Check-----', function(){
    it('---function count----', function(){
        var mock = sinon.mock(stdObj)
        var expt = mock.expects('getExternal')
        expt.exactly(1);
        expt.withArgs(50)
        stdObj.finalMarks(50)
        mock.verify()
    })
})