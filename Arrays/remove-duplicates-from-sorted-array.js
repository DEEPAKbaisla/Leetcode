/**
 * 26. Remove Duplicates from Sorted Array

 * i — checks every element in the array.
 *  k — tracks the position of the last unique element. 
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
 */
var removeDuplicates = function(nums) {
    let k=0
    for (let i = 0 ; i<nums.length; i++){
        if(nums[i]>nums[k]){
            k= k+1
            nums[k]=nums[i]
        }

    }
    return k+1
}