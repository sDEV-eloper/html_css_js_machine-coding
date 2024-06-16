// Sort array after converting elements to their squares
// Given an array of both positive and negative integers ‘arr[]’ which are sorted. The task is to sort the square of the numbers of the Array. 

// Input  : arr[] =  {-6, -3, -1, 2, 4, 5}
// Output : 1, 4, 9, 16, 25, 36 

const arr = [-6, -3, -1, 2, 4, 5];
let n = arr.length;
let sortSqr=new Array(n);
let start=0, end=n-1, last=n-1;
while(start<=end && last>=0){

  if(Math.abs(arr[start])>=Math.abs(arr[end])){
    sortSqr[last]=arr[start]**2;
    start++;
    
  }else{
    sortSqr[last]=arr[end]**2;
    end--;
  }
  last--;
}

    console.log('Sorted array:', sortSqr);


    //Time Comp: O(n)
    //Space Comp: O(n)