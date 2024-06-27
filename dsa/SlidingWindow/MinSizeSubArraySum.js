// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.


// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

var minSubArrayLen = function(target, nums) {
    let minLength = Infinity; 
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end]; 

        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1); 
            currentSum -= nums[start]; 
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength; 
};


let target = 7;
let nums = [2, 3, 1, 2, 3, 4];
console.log(minSubArrayLen(target, nums)); //2
