const palindromes = function (tested) {
    //turns word into array and reverses it
    let testedArr = tested.split('');

    //filtereli a punctuationt meg a szokozoket meg a szamokat meg mindent egy masik arraybol
    let punct = ".,!;0123456789";

    function isPunct(val)
    {
        return !punct.includes(val);
    }

    const palindrome = testedArr.filter(isPunct);

    const compareArrays = (a, b) => {
        return a.toString() === b.toString();
    };

    return compareArrays(palindrome.toString().toLowerCase(), palindrome.reverse().toString().toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
