//Longest Substring with Exactly K Unique Characters
//Input: Str = “aabbcc”, k = 3
// Output: 6
// Explanation: 
// There are substrings with exactly 3 unique characters
// {“aabbcc” , “abbcc” , “aabbc” , “abbc” }
// Max is “aabbcc” with length 6.


const str = "aabbccdeeede";
const k = 3;
const charFrequency = new Map();

function updateCharFrequency(char) {
  if (charFrequency.has(char)) {
    charFrequency.set(char, charFrequency.get(char) + 1);
  } else {
    charFrequency.set(char, 1);
  }
  return charFrequency;
}

let start = 0, end = 0;
let maxLength = -Infinity;

while (end < str.length) {
  updateCharFrequency(str[end]);

  if (charFrequency.size < k) {
    end++;
  } else if (charFrequency.size === k) {
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
  } else {
    while (charFrequency.size > k) {
      charFrequency.set(str[start], charFrequency.get(str[start]) - 1);
      if (charFrequency.get(str[start]) === 0) {
        charFrequency.delete(str[start]);
      }
      start++;
    }
    end++;
  }
}

console.log("maxLength: ", maxLength);
