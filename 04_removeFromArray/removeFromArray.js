const removeFromArray = function(input, ...filt) {
    return input.filter(val => !filt.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;