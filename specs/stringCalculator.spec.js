const assert = require('assert');
const sumValues = require('../src/stringCalculator'); 

describe('String Calculator', function() {

    it('should return int 0 when passing an empty string', () => {
        const result = sumValues("");
        assert.equal(0, result);
    })

})


