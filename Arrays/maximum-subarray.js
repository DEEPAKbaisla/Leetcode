/*53. Maximum Subarray
*Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
approach :use kadane's algorithm 
 1:- ek sum lo or ek maxSum lo array pe iterate kro sum me current element add kro or maxSum me max of sum and maxSum kro 
 2- agr sum < 0 ho jaye to sum ko 0 kr do taki next element se start ho jaye
 3- return maxSum at the end 
 */

var maxSubArray = function(nums) {
    let sum = 0;
    let maxSum =-Infinity;//-Infinity is used to handle cases where all numbers are negative

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(sum, maxSum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}