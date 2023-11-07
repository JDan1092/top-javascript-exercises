const leapYears = function(year) {
    let dividedBy4 = year % 4;
    let dividedBy100 = year % 100;
    let dividedBy400 = year % 400;

    if (dividedBy4 !== 0) {
        return  false;
    }
    if (dividedBy4 === 0 && dividedBy100 !== 0) {
        return true;
    }
    if (dividedBy4 === 0 && dividedBy100 === 0 && dividedBy400 === 0) {
        return true;
    } 
    if (dividedBy4 === 0 && dividedBy100 === 0 && dividedBy400 !== 0) {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
