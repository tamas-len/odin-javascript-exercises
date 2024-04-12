const reverseString = function(input) {
    let out = '';
    for (let i = input.length-1; i >= 0; i--)
    {
        out += input[i];
    }
    return out;
};

//not to self: meg van .reverse() function ami egy listet reversel, es akkor pl input.split("").reverse().join("")

// Do not edit below this line
module.exports = reverseString;
