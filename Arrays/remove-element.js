/**
 * 27. Remove Element

*i → poore array ko check karta hai.
*x → batata hai ki next valid element kis index par rakhna hai.
isme hmko chahiye kitne element val k barabr nahi hai, to x pointer lek jo b value k barabr nahi hai move karna hai, or x ko return karenge.
 */

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

var removeElement = function(nums, val) {
    let x = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] != val) {
            nums[x]=nums[i]
            x=x+1
        }
    }
        return x
};