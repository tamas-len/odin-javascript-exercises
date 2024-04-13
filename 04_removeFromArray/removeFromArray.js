const removeFromArray = function(input, filt) {
    let out = [];
    out = input.filter(number => number !== filt);
    return out;
};

// Do not edit below this line
module.exports = removeFromArray;