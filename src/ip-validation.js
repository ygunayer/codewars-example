
// <4 kyu> IP Validation (515decfd9dcfc23bb6000006)
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. Input to the function is guaranteed to...
// https://www.codewars.com/kata/ip-validation

var isValidIP = function(str) {
    var parts = (str || '').split(/\./);
    if (parts.length != 4) {
        return false;
    }
    return parts.reduce((acc, part) => {
        if (/^0+[^0]+$/g.test(part)) {
            return false;
        }
        var num = Number(part);
        return acc = acc && !isNaN(num) && num >= 0 && num <= 255;
    }, true);
};

module.exports = isValidIP;
