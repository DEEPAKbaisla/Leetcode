/*852. Peak Index in a Mountain Array
*

approach -->
step 1 : agr hm middle value dhundh le or mid+1 bada ha to peak right side me hoga to l=mid+1
step 2 : m>m+1 peak is towards left or it can be mid itself so r=mid 
step 3 : loop chalega jb tk l<r hoga or return l ya r dono same hoga jb loop khatam hoga
 */

var peakIndexInMountainArray = function(arr) {
    let l=0
    let r=arr.length-1
    while(l<r){
        let m =Math.floor((l+r)/2)
        if(arr[m]<arr[m+1]){
            l=m+1
        }
        else{
            r=m
        }
    }
    return l
};