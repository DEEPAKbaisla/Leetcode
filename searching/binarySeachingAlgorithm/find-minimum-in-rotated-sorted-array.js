/*153-> Find Minimum in Rotated Sorted Array
Input: nums = [3,4,5,1,2]
Output: 1

approach -->
step 1 : find  mid or mid inflextion point 
      if(num[m] <num[m-1]) vohi min hai return  return arr[m]
      search non sorted part of array
      if(num[l] > num[m]) r=m-1 else l=m+1   
  
*/


var findMin = function(nums) {
    let l=0 
    let r=nums.length-1
    while(l<=r){
        if(nums[l]<=nums[r]){
            return nums[l]
        }
        let m = Math.floor((l+r)/2)
        if(nums[m]<nums[m-1]){
            return nums[m]
        }
        //if left half is non sorted 
        if(nums[l]>nums[m]){
            r=m-1
        }else{
            l=m+1
        }
        
    }
};


