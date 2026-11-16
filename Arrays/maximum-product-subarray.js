/*152. Maximum Product Subarray
* Input:
 nums = [2,3,-2,4]
 Output: 6
 Explanation: [2,3] has the largest product 6.
* handle negative numbers by iterating from both left and right sides of the array. 
 */


 var maxProduct = function (nums) {
    let maxProduct = -Infinity
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
        maxProduct = Math.max(maxProduct, product)
        if (product === 0) product = 1
    }
    product = 1
    for (let i = nums.length-1; i >= 0; i--) {
        product *= nums[i]
        maxProduct = Math.max(maxProduct, product)
        if (product === 0) product = 1
    }
    return maxProduct
};