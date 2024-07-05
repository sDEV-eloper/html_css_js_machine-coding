let nums1 = [4, 5, 6, 0, 0, 0], m = 3, nums2 = [1, 2, 3], n = 3;

let p1 = m - 1; // Pointer for nums1
let p2 = n - 1; // Pointer for nums2
let p = m + n - 1; // Pointer for the end of nums1

while (p2 >= 0) {
  if (p1 >= 0 && nums1[p1] > nums2[p2]) {
    nums1[p] = nums1[p1];
    console.log(nums1)
    p1--;
  } else {
    nums1[p] = nums2[p2];
    p2--;
  }
  p--;
}

console.log(nums1);
