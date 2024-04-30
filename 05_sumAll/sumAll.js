const sumAll = function(one, two) {
    out = 0;
    if(one < 0 || two < 0)
    {
        return "ERROR"
    }

    if(typeof(one) != 'number' || typeof(two) != 'number')
    {
        return "ERROR"
    }

    if(one < two)
    {
        for (let i = one; i <= two; i++)
        {   
            out += i;
        }

    }
    else
    {
        for (let i = two; i <= one; i++)
        {
            out += i;
        }

    }
    return out
};

// Do not edit below this line
module.exports = sumAll;
