// 1493. Longest Subarray of 1's After Deleting One Element
/*
*Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
* 
*/

var longestSubarray = function(nums) {
  let i =0, j = 0;
  let maxZeros = 0;
  let maxWindow = 0;
  while (j < nums.length) {
    if (nums[j] === 0) {
      maxZeros++;
    }
    while (maxZeros > 1) {
      if (nums[i] === 0) {
        maxZeros--;
      }
      i++;
    }
    maxWindow = Math.max(maxWindow, j - i + 1 );
    j++;
  }
  return maxWindow -1 ;
};
console.log(longestSubarray([0,1,1,1,0,1,1,0,1])); // Output: 5