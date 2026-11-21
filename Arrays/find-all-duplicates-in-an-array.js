// 442. Find All Duplicates in an Array
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

var findDuplicates = function(nums) {
   let map=new Map()
   let ans=[]
   for(let i=0;i<nums.length;i++){
    if(!map.has(nums[i])){
        map.set(nums[i] ,i)
    }else{
    let firstIndex = map.get(nums[i]); // index of the earlier occurrence
      console.log(`${nums[i]} found at index ${i}, first seen at index ${firstIndex}`)
        ans.push(nums[i])
    }
    // console.log(map)
   }  
    return ans
}