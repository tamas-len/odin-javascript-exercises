const removeFromArray = function(input, ...filt) {
    let out = [];
    /*filt = Array.from(arguments);
    filt.shift();*/

    for (let i = 0; i = filt.length; i++)
    {
        out = input;
        out = out.filter(number => number == filt[i]);
    }

    //return input.filter(number => !args.includes(number));
    //out.splice(-1, 1);
    return out;
};

// Do not edit below this line
module.exports = removeFromArray;