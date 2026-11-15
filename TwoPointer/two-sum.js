/* 1. Two Sum
/*
approach: use map to store nums and their indices, then iterate through the array and check if the complement (target - current number) exists in the map. If it does, return the indices of the current number and its complement.
*/

var twoSum = function(nums, target) {
   const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];

        if (map.has(need)) {
            return [map.get(need), i];
        }

        map.set(nums[i], i);
    }
};

//trick :-> nhi h to add kr dega jaise hi milega return kr dega