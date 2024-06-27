// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate2 = function(nums, k) {
for(let i=0;i<nums.length;i++){
  let window=new Set();
  if(window.has(nums[i])){
    return true;
  }
  window.add(nums[i]);
  if(window.size>k){
    window.delete(nums[i-k])
  }
 
}
    return false;
};
console.log(containsNearbyDuplicate2([1, 2, 3, 1], 3)); 
