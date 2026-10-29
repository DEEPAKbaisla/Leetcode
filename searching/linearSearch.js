/** linear search algorithm
 * like searching for a specific item in an array by checking each element one by one /like for loop
 * EX - serching for a specific number in an array of numbers and returning the index of that number if found or -1 if not found
 * input = [1, 2, 3, 4, 5], target = 3
 * output = 2
 * input = [1, 2, 3, 4, 5], target = 6
 * output = -1 
 */
//O(n) time complexity 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
