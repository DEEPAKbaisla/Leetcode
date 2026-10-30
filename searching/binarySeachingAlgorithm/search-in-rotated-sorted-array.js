/*33. Search in Rotated Sorted Array
     Input: nums = [4,5,6,7,0,1,2], target = 0
     Output: 4


     we can't solve this with simple binary search approch bz our nums array is rotated by  3 element  [1,2,3,4,5,6,7]=>[4,5,6,7,0,1,2] 
     to sorted h pr ascending or decending order m nhi 
     so hmri approch hogi 
     1-> find middle fast
     2-> find which portion is sorted left or right
        left is sorted then check Target left side ki range mein hai?ya to left ki range m hoga ya right ki me 
*/ 



var search = function(nums, target) {
    let l=0
    let r=nums.length-1
    while(l<=r){ 
        let m=Math.floor((l+r)/2)
        if(nums[m] === target){
            return m
        }
        //left side sorted 
        if(nums[l]<=nums[m] ){ //equal to imp.
        if(target >= nums[l] && target<nums[m]){
                     r=m-1
        }else{
            l=m+1
        } 
      }
     //  right ki range 
      else{
        if(target>nums[m]&& target <=nums[r]){
            l=m+1
        }
        else{
            r=m-1
        }
      }
    }
    //kisi m b na mile toh
    return -1
};
