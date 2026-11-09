/*724. Find Pivot Index



approach Humein aisa index find karna hai jahan:
Left side ke saare elements ka sum = Right side ke saare elements ka sum.
1.. total sum nikal lo 
2.. left sum nikalte jao aur right sum = total - leftsum - current element( let right = total - leftsum - nums[i])

left calculation->
          (leftsum = 0kyunki index 0 ke left mein koi element nahi hai.)
                 0 + 1 = 1
                 1 + 7 = 8
                 8 + 3 = 11
                 11 + 6 = 17
                 17 + 5 = 22
                 22 + 6 = 28

Index	Element	Left Sum	Right Sum
0	       1	    0	        27
1	       7	    1	        20
2	       3	    8	        17
3	       6	    11        	11
4	       5	    17        	6
5	       6	    22        	0

Index 3 par dono equal hain, isliye answer 3 hai.
*/


var pivotIndex = function (nums) {
    let total = 0
    let leftsum = 0
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        let right = total - leftsum - nums[i]
        if (right === leftsum) return i
        leftsum += nums[i];
    }

    return -1
};