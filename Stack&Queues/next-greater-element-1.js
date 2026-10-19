/**q-496. Next Greater Element I
 * last element of nums2 next greater element is -1 kya ki uske baad koi element nahi hai to udr se start or next wale k liye stack top check karenge agr top se chota h to usko pop karenge or fir check karenge agr stack empty h to -1 else stack top ko ngeMap m dal denge
 */
/**Time Complexity = O(n + m) Har element ko process karte hain.
 while loop mein stack.pop() hota hai, lekin har element stack mein maximum ek baar push aur ek baar pop hota hai.
Isliye poore loop ka total time O(n) hai, O(n^2) nahi.
nums1 par loop karte hain aur har element ke liye ngeMap se next greater element ko retrieve karte hain, jo O(1) time leta hai. Isliye total time complexity O(n + m) hai, jahan n = nums2.length aur m = nums1.length.
Space Complexity = O(n)
**/ 

var nextGreaterElement = function(nums1, nums2) {
    let ngeMap={}
    let stack=[]
    let n=nums2.length
    stack.push(nums2[n-1])
    ngeMap[nums2[n-1]] = -1

    for(let i =n-2 ;i>=0;i--){
        let top =stack[stack.length-1]
        if(nums2[i]<top){
            ngeMap[nums2[i]]=top 
        }
        else{
        while (stack.length){
            if(stack[stack.length-1]< nums2[i]){
                stack.pop()
            }else{
                ngeMap[nums2[i]]= stack[stack.length-1]
                break
            }
        }
        if(stack.length === 0){
            ngeMap[nums2[i]] = -1
        }
        }
        stack.push(nums2[i])
    }

    let ans = []
    for(let i =0 ;i<nums1.length;i++){
        ans.push(ngeMap[nums1[i]])
    }
    return ans
};


console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))





////  more optimized code
var nextGreaterElement = function (nums1, nums2) {

    let ngeMap = {}
    let stack = []
    let n = nums2.length
    stack.push(nums2[n - 1])
    ngeMap[nums2[n - 1]] = -1

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            if (stack[stack.length - 1] < nums2[i]) {
                stack.pop()
            } else {
                ngeMap[nums2[i]] = stack[stack.length - 1]
                break
            }
        }
        if (stack.length === 0) {
            ngeMap[nums2[i]] = -1
        }

        stack.push(nums2[i])
    }

    return nums1.map(x => ngeMap[x])
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))