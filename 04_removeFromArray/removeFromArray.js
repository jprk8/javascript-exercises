const removeFromArray = function(myArray, ...args) {
    const newArray = [];
    const items = [...args];
    outer: for (let i = 0; i < myArray.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (myArray[i] === items[j]) {
                continue outer;
            }
        }
        newArray.push(myArray[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
