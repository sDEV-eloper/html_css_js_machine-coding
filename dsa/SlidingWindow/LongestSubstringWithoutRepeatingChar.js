// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
     let start=0, end=0, longestSub=-Infinity;
    let newStr=""
   
    while(end<=s.length){
        longestSub=Math.max(longestSub, newStr.length);
        if(newStr.includes(s[end])){
           start++;
            end=start;
            newStr=""
        }
        newStr+=s[end];
        end++;
    }
    return longestSub===-Infinity?s.length:longestSub;
};

const s="abcabcbb";
console.log(lengthOfLongestSubstring(s)); //3
