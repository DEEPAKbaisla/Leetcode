/* 42. Trapping Rain Water
*
* approach:
* 1.. calculate how much water can be trapped at each index
* we have to find the max height from left and right of each index
* water trapped at index i = min(maxLeft[i],maxRight[i])-height[i]
* we can use two loops to find the max area 
* ex 1 => Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

  current level = 0 1 0 2 1 0 1 3 2 1 2 1
  maxLeft       = 0 1 1 2 2 2 2 3 3 3 3 3
  maxRight      = 3 3 3 3 3 3 3 3 2 2 2 1
  water trapped = 0 0 1 0 1 2 1 0 0 1 0 0
  ans =min(maxLeft[i],maxRight[i])-height[i]
*/
var trap = function (height) {
    let n = height.length
    let maxL = []
    maxL[0] = height[0]

    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i])
    }
    let maxR = []
    maxR[n - 1] = height[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        maxR[i] = Math.max(height[i], maxR[i + 1])
    }
    let ans=0
    for(let i=0;i<n;i++){
        let waterTrapped=Math.min(maxL[i],maxR[i])-height[i]
        ans=ans +(waterTrapped<0?0:waterTrapped)
    }
    return ans
};