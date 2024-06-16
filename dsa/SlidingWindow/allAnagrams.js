// Find All Anagrams in a String
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]

//MY APPROACH

// const s = "cbaebabacd", p = "abc"
const s = "abab", p = "ab"
const k=p.length;

const anagramMap=new Map();

function buildCharCountMap(str) {
    const charCountMap = new Map();
    for (const char of str) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
    return charCountMap;
}
function areMapsEqual(map1, str2) {
    const charCountMap2 = new Map();
    for (const char of str2) {
        charCountMap2.set(char, (charCountMap2.get(char) || 0) + 1);
    }
    
    if (map1.size !== charCountMap2.size) {
        return false;
    }
    
    for (const [key, value] of map1) {
        if (charCountMap2.get(key) !== value) {
            return false;
        }
    }
    return true;
}


let i=j=0;
let arr=[]
while(i<s.length){
  console.log(i,j)
  while((j-i)<k){
      anagramMap.set(s[j], (anagramMap.get(s[j])||0)+1)
      j++;
  }
  console.log('anagram= ', anagramMap)
 
  if(areMapsEqual(anagramMap, p)){
    arr.push(j-k);
  }
  anagramMap.clear();
  i++;
  j=i;
}

console.log(arr)
