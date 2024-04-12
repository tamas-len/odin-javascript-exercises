const reverseString = function(input) {
    let out = '';
    for (let i = input.length-1; i >= 0; i--)
    {
        out += input[i];
    }
    return out;
};

// Do not edit below this line
module.exports = reverseString;
