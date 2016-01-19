
var mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect;

var api = require('../src/default-configuration'),
    mandatory = api.mandatory,
    defaults = api.defaults;

describe('Default configuration (52fff3f4aff4559096000917)', function() {
    describe('defaults', function() {
        it('should work correctly for simple objects', function() {
            var result = defaults({ x: 1 }, { y: 2, z: 3 });
            var expected = {
                x: 1,
                y: 2,
                z: 3
            };
            expect(result).to.deep.equal(expected);
        });
        it('should throw if mandatory field is missing', function() {
            var alt = { y: 2, z: 3, t: mandatory('foo') };
            var fn = function() {
                defaults({ x: 1 }, alt);
            };
            expect(fn).to.throw('foo');
        });
    });
});
