// Input: num = 240, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.

var divisorSubstrings = function(num, k) {
    let numStr = num.toString();
    let count = 0;

    for (let i = 0; i <= numStr.length - k; i++) {
        let substring = numStr.substring(i, i + k);
        let divisor = parseInt(substring);
        
        if (divisor !== 0 && num % divisor === 0) {
            count++;
        }
    }

    return count;
};
let num = 240, k = 2;
console.log(divisorSubstrings(num, k)); //2
