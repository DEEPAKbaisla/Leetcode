/* Q 278. First Bad Version
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

approch 
1-> first find middle 
2-> agr middle !=bad to right side m hoga to l=middle+1 (decrease search space)
3-> else middle=bad left side check krni hogi middle se phle b BAD ho skta h --> r=middle bz m b to ho skta h phle bad (When not sure about middle is ans or not than r=m not r=m-1)
4-> while(l<r)bz if we move l=m+1 ,r=m-1 than L<=R
in by single by 1 don't use =
*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1
        let r=n
        while(l<r){
            let m =Math.floor((l+r)/2)
            let bad = isBadVersion(m)
            if(!isBadVersion(m) ){
                l=m+1
            }
            else{
                r=m
            }
        }  
        return r     
    };
};


