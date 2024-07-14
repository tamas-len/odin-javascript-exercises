//maybe make another function for getting age and then store age and compare based on that
//so u wont get lost in all the object shit

const findTheOldest = function(ppl) {
    let oldest = 0;

    for(let i = 0; i < ppl.length; i++)
    {
        if(ppl[i].yearOfDeath - ppl[i].yearOfBirth > ppl[oldest].yearOfDeath - ppl[oldest].yearOfBirth)
        {
            oldest = i;
        }
    }

    return ppl[oldest].name;
};

// Do not edit below this line
module.exports = findTheOldest;
