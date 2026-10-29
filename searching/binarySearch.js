/**Binary Search 
 * better than linear search because it reduces the time complexity to O(log n) by dividing the search space in half with each iteration.
 * To Apply binary search, the array must be sorted in ascending order or descending order.
 * EX input = [1, 0, 3, 5, 9, 12], target = 9
 * output = 4
 * 
 */




// ----- working is binary search algorithm -------
// ->1 find middle of array 
//     mid = (left + right) / 2
// ->2 teen case ho skte h target se 
//    equal to mid, less than mid, greater than mid
// ->3 while k loop hoga jb tkk left <= right or right >= left ek hi baat h equal to isliye kyuki left or right same index p b ho skte h or agr ek hi element hua  
// binary search reduce searching space by half until find element


function binarySearch(arr, target) {
    let left =0
    let right=arr.length-1
    while(left<=right){
        let mid =Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }
        else if(arr[mid]<target){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return -1
}

