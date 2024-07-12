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

    //visszairja szova es checkeli hgy ugyanaz-e
    return palindrome == palindrome.reverse();

    //return palindrome.reverse();
};

// Do not edit below this line
module.exports = palindromes;
