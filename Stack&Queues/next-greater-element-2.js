/**q-503. Next Greater Element II
 * 
 * approch 1--> double the array and then apply the same logic as next greater element 1
 * when ever circular array or linked list or find NGE double that array
 * 
 * T=O(n)  S=O(n)
 */

var nextGreaterElements = function(nums) {
    let arr =[...nums ,...nums]
    let n =arr.length

    let stack =[]
    stack.push(arr[n-1])
    let ans=Array(n).fill(-1)

    for(let i=n-1;i>=0;i--){
        while(stack.length){
            let top =stack[stack.length-1]
            if(arr[i]<top){
                ans[i]=top
                break
            }
            else{
                stack.pop()
            }
        }

        // if(!stack.length){  iski need nhi kyuki already array -1 se fill ki hui h hmne
        //     ans[i] =-1
        // }
          stack.push(arr[i])
    }
  

  return ans.slice(0,n/2)
};

/**approch 2--> more optimized code
 * Index double array double krne ki need nhi h 
 *  
 * T=O(n)  S=O(n)
 *    9,10,11,12,13,14,15,16,17
 *       0,1,2,3,4,5,6,7,8
 *      [1,5,0,3,4,9,2,6,8]
 * 
 *     out = [5,9,3,4,9,-1,6,8,9]
 *      index= 0,1,2,3,4,5,6,7,8
 * ussi array m overwrite krta h kyuki limited h array ka size
 */

var nextGreaterElements = function(nums) {
    let n =nums.length
    let stack =[]
    let ans=Array(n).fill(-1)
    stack.push(nums[n-1])
    for(let i=(2*n)-2;i>=0;i--){
        while(stack.length){
            let top =stack[stack.length-1]
            if(nums[i%n]<top){
                ans[i%n]=top
                break
            }
            else{
                stack.pop()
            }
        }
        stack.push(nums[i%n])

}
    return ans.slice(0,n)
}

