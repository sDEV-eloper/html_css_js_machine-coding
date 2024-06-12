
	
// Returns maximum sum in a subarray of size k.
//Input  : arr[] = {100, 200, 300, 400},  k = 2
// Output : 700




	function maxSum(arr,n,k)
	{
		// k must be smaller than n
		if (n < k)
		{
			console.log("Invalid");
			return -1;
		}
		// Compute sum of first window of size k
		let res = 0;
		for (let i=0; i<k; i++)
		res += arr[i];
	
		// Compute sums of remaining windows by
		// removing first element of previous window 
        //and adding last element of current window.
		let curr_sum = res;
		for (let i=k; i<n; i++)
		{
			curr_sum += arr[i] - arr[i-k];
			res = Math.max(res, curr_sum);
		}
	
		return res;
	}
	
	
		let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
		let k = 4;
		let n = arr.length;
		console.log(maxSum(arr, n, k));
	
