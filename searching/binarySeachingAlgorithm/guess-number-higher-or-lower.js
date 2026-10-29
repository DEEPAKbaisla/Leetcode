/** 374. Guess Number Higher or Lower
 * Input: n = 10, pick = 6
   Output: 6
 *  simple h ek given function/api h jo hmko ans dega guess()
 * 
 */


var guessNumber = function(n) {
    let l=1
    let r=n
    while(l<=r){
        let m = Math.floor((l+r)/2)
        let res=guess(m)
        if(res=== 0){
            return m
        }
        else if(res <0){
            r=m-1
        }
        else{
            l=m+1
        }

    }
    return -1
};