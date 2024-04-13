const removeFromArray = function(input) {
    let out = [];
    filt = Array.from(arguments);
    filt.shift();

    for (let i = 0; i <= filt.length; i++)
    {
        out = input;
        out = out.filter(number => number !== filt[i]);
    }

    return out;
};

// Do not edit below this line
module.exports = removeFromArray;