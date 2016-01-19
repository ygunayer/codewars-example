
var mocha = require('mocha'),
    chai = require('chai'),
    expect = chai.expect;

var isValidIP = require('../src/ip-validation');

describe('IP Validation (515decfd9dcfc23bb6000006)', function() {
    describe('isValidIP', function() {
        var badIPs = [
            'foo',
            '1.2.3',
            '1.2.3.4.',
            '1.2.3.4.5',
            '1...2..3..4',
            '123.045.067.089',
            '256.256.256.256',
            '123.456.789.0'
        ];

        var goodIPs = [
            '1.2.3.4',
            '255.255.255.255',
            '0.0.0.0'
        ];

        it('should return false for invalid IPs', function() {
            badIPs.forEach(function(ip) {
                var isValid = isValidIP(ip);
                expect(isValid).to.be.false;
            });
        });

        it('should return true for valid IPs', function() {
            goodIPs.forEach(function(ip) {
                var isValid = isValidIP(ip);
                expect(isValid).to.be.true;
            });
        });
    });
});
