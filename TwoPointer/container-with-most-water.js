/*11. Container With Most Water
*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
approach 1: brute force
  we have to find max water area =min(height[i],height[j])*(j-i)
  we can use two loops to find the max area 
  but it will take O(n^2) time complexity
approach 2: two pointer 
 we have to find max water area =min(height[left],height[right])*(right-left)
 be greedy and move the pointer which has less height because it will not contribute to max area  
             |     
       |. . .| 
    - -| - - |- -  
     0 1 2 3 4
     area = w*h => math.min(arr[i],arr[j])*(j-i)

 */


 var maxArea = function(height) {
    let i =0
    let j =height.length-1
    let maxWater=0
    while(i<j){
        let area =Math.min(height[i],height[j])*[j-i]
        maxWater=Math.max(maxWater,area)
        if(height[i]>height[j]){
            --j

        }else{
            ++i
        }
    }
    return maxWater
};