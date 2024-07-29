const fibonacci = function(index) {
    const fib = [0, 1];
    if (index < 0) {
        return 'OOPS';
    } else {
        for (let i = 1; i <= index; i++) {
            fib.push(fib[i]+fib[i-1]);
        }
        return fib[index];
    }
};


// Do not edit below this line
module.exports = fibonacci;