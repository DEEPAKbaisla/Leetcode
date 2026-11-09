/* 1732. Find the Highest Altitude
*ex Input: gain = [-5,1,5,0,-7]
 Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.
* 
approach :- 
- Starting altitude = 0
- gain[i] represents the altitude change from the current point to the next point.
- Add each gain to the current altitude.
- Track the highest altitude.
       Point	Gain	Altitude
       0	    -	        0
       1	    -5	        -5
       2	    +1	        -4
       3	    +5           1
       4	    0	         1
       5	    -7	        -6
    highest altitude = 1 
 */

var largestAltitude = function(gain) {
    let highest =0
    let current=0
    for(let i=0 ;i<gain.length;i++){
        current=current +gain[i]
        if(current >highest){
            highest =current
        }

    }
    return highest
};