const palindromes = function (word) {
    //checking for palindrome...with extra steps...
    //remember reverse() exists
    const punctuation = `.,?!'":; `;
    let arr = word.split("");
    let filtered = arr
        .filter((char) => {
            if (!punctuation.includes(char)) {
                return char;
        }})
        .map((item) => {
            return item.toLowerCase();
        });
    const middle = Math.floor(filtered.length / 2);
    let last = filtered.length - 1;
    let palindrome = true;
    for (let i = 0; i <= middle; i++) {
        if (filtered[i] != filtered[last]) {
            palindrome = false;
        }
        last--;
    }
    return palindrome;
}


// Do not edit below this line
module.exports = palindromes;
