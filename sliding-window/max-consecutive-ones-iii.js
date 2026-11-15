/*
* 1004. Max Consecutive Ones III
*
* Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
* 
* 
* **/

var longestOnes = function (nums, k) {
  let i = j = 0;
 let  maxZeros = 0;
  let maxWindow = 0;
  while (j < nums.length) {
    if (nums[j] === 0) {
      maxZeros++;
    }
    while (maxZeros > k) {
      if (nums[i] === 0) {
        maxZeros--;
      }
      i++;
    }
    let currsize= j - i + 1;
    maxWindow = Math.max(maxWindow, currsize);
    j++
  }
  return maxWindow;
};

