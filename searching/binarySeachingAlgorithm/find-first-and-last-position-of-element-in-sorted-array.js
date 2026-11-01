/*
34. Find First and Last Position of Element in Sorted Array

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4] 


approach : use two binary searches to find the first and last position of the target element in the sorted array.
condition --> if(m<target) l=m+1  else r=m (merge m>target r=m-1 or m=target together) for first position and if(m>target) r=m-1 else l=m for last position
second binary search  use Math.ceil to avoid infinite loop when l and r are adjacent
*/

var searchRange = function(nums, target) {
    let l=0
    let r=nums.length-1
    let ans=[-1,-1]
    while(l<r){
        let m =Math.floor((l+r)/2)
        if(nums[m]<target){
            l=m+1
        }else{
            r=m
        }
    }
    if(nums[l]===target)ans[0]=l

    l=0
    r=nums.length-1
    while(l<r){
        let m =Math.ceil((l+r)/2)
        if(nums[m]>target){
            r=m-1
        }else{
            l=m
        }
  }
    if(nums[l]===target)ans[1]=l


return ans
};