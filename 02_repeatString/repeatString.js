const repeatString = function(word, num) {
    if (num < 0)
    {
        return "ERROR"
    }
    else
    {
        let out = "";
        for (let i = 0; i < num; i++)
        {
            out += word;
        }
        return out;
    }
};

// Do not edit below this line
module.exports = repeatString;
