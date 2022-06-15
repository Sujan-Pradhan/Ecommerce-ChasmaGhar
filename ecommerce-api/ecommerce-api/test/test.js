var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('my first case check', function () {
    it('value check', function () {
      assert.equal([1, 2, 3, 4, 5].indexOf(4), 3);
    });
    it('value check', function () {
        assert.equal([1, 2, 3, 4, 5].indexOf(4), 3);
      });
  });

});