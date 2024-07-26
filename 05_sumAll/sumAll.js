const sumAll = function(first, last) {
    let sum = 0;
    if (first < 0 || last < 0 || !(Number.isInteger(first)) || !(Number.isInteger(last))) {
        return 'ERROR';
    }
    if (first > last) {
        let temp = first;
        first = last;
        last = temp;
    }
    for (let i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
