const palindromes = function (str) {
    // let re = /[\W_]/g; ///[^A-Za-z0-9]/g;
    // let lowRegStr = str.toLowerCase().replace(re, '');
    // let reverseStr = lowRegStr.split('').reverse().join(''); 
    // return reverseStr === lowRegStr;

    let re = /[\W_]/g; ///[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
