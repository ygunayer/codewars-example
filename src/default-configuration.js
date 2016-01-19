
// <5 kyu> Default configuration (52fff3f4aff4559096000917)
// A common pattern is for a function to take a configuration object as a parameter, implementing defaults or throwing erro...
// https://www.codewars.com/kata/default-configuration

var ThrowAdvice = function(err) {
    this.throw = () => { throw err; };
};

var orElse = function(x, orElse) {
    if (typeof x !== 'undefined') {
        return x;
    }
    if (orElse instanceof ThrowAdvice) {
        orElse.throw();
    }
    return orElse;
};

var defaults = function(obj, defs) {
    var ret = {};
    var allKeys = Object.keys(obj).concat(Object.keys(defs));
    for (var i = 0; i < allKeys.length; i++) {
        var k = allKeys[i];
        var val = orElse(obj[k], defs[k]);
        if (typeof val !== 'undefined') {
            ret[k] = val;
        }
    }
    return ret;
};

var mandatory = function(err) {
    return new ThrowAdvice(err);
};

// this solution is slightly different than the other example because it exports more than one function for testability
module.exports = {
    defaults: defaults,
    mandatory: mandatory
};
