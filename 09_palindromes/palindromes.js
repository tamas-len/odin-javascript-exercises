const palindromes = function (tested) {
    //turns word into array and reverses it
    let testedArr = tested.split('').reverse();

    //filtereli a punctuationt meg a szokozoket meg a szamokat meg mindent egy masik arraybol
    let punct = [" ", "!", ";", ".", ","];

    function isPunct(val)
    {
        return !punct.includes(val);
    }

    const palindrome = testedArr.filter(isPunct);

    return palindrome;

    //visszairja szovas

    //checks if its the same shit
};

// Do not edit below this line
module.exports = palindromes;
