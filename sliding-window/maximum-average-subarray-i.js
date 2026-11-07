/*  643. Maximum Average Subarray I
* approach 1 : brute force
     by using two for loops we can find the subarray of size k and then we will find the average of that subarray and then we will keep track of the maximum average
     time take O(n*k) and space take O(1)
*
 */

var findMaxAverage = function (nums, k) {
    let n = nums.length
    let avg = -Infinity;

    for (let i = 0; i <= n - k; i++) {
        let sum = 0
        for (let j = 0; j < k; j++) {
            sum = (sum + nums[i + j])
        }
        avg = Math.max(avg, sum / k)
    }
    return avg
};
//approach 2 : by two loop not nested two different loops one for checking the first window sum and then we will use sliding window technique to find the maximum average of subarray of size k
//time take O(n) and space take O(1)

var findMaxAverage = function (nums, k) {
    let sum = 0
    // First window sum
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    let maxSum = sum;
    // Sliding window 
    for (let i = k; i < nums.length; i++) {
//next add krte rho aur previous ko minus krte jainge
        sum = sum + nums[i] - nums[i - k];

        maxSum = Math.max(maxSum, sum);
    }
    return maxSum / k;
};