// Input: nums = [1,1,0,1,1,1]
// Output: 3

var findMaxConsecutiveOnes = function(nums) {
    let count =0
    let mx=0
    for (let i =0 ;i<nums.length;i++){
        if (nums[i] === 1) {
            count++
            mx = Math.max(mx, count)
        }
        else {
            count=0
        }
    }
    return Math.max(mx,count)
};

//count zero krna jaruri hai kyuki verna use add jayega 