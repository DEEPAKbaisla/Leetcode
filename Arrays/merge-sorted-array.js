/**Q 88. Merge Sorted Array
 * 
 *  Code ka logic samjho
1. i, nums1 ke last valid element ko point karta hai.
2. j, nums2 ke last element ko point karta hai.
3. k, merged array ki last position ko point karta hai.
4. Dono pointers ke elements compare karo.
5. Jo bada ho, use nums1[k] par rakho.
6. Us pointer ko decrement karo aur har iteration mein k-- karo.
7. Jab j < 0 ho jaaye, saare elements merge ho chuke honge.

6. Complexity
- Time Complexity: O(m+n) — har element maximum ek baar process hota hai.
- Space Complexity: O(1) — extra array use nahi kiya.
 * 
 */

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

var merge = function(nums1, m, nums2, n) {
    let i = m-1
    let j = n-1
    let k =m+n-1
    while(j>=0){
        if(i>=0 && nums1[i]>nums2[j]){
            nums1[k]=nums1[i]
            i--

        }else{
            nums1[k]=nums2[j]
            j--
        }
        k--
    }
}


// while (j >= 0) hi kyun?
// Kyunki nums1 ke bache hue elements pehle se sahi positions par hain. Lekin agar nums2 mein koi element bacha hai, toh use copy karna zaroori hai.