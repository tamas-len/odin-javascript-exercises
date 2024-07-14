const fibonacci = function(num) {
    let fib = [1, 1];

    for(let i = 1; i <= 26; i++)
    {
        fib.push(fib[fib.length-1] + fib[fib.length-2]);
    }

    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
