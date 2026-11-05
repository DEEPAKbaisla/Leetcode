// 167. Two Sum II - Input Array Is Sorted
// ex 1 : [0,2,7,11,15], target = 9
// output : [1,2]  // 2+7=9

/*approach 1 : brute force
     by using two for loops we can find the pair of numbers which sum is equal to target
* 
approach 2 : two pointer
step 1 : we will take two pointer left and right
step 2 : we will check the sum of left and right if it is equal to target then return the index of left and right
their is only three case -->
 1:sum<target then we will move left pointer to right 
2:sum>target then we will move right pointer to left 3:sum==target then we will return the index of left and right

*/

var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum > target) {//sum greater 
      right--;
    } else if (sum < target) {  //sum smaller
      left++;
    } else {    // sum == target
      return [left + 1, right + 1];
    }
  }
};
