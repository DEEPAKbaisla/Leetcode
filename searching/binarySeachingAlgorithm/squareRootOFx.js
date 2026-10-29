// 69. Sqrt(x)
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2

/**  by linear search approch
 *  √20   go from  1² =1 ❌
 *                 2² =4 ❌
 *                 3² =9 ❌
 *                 4²=16 ❌ -> ans ho jayega
 *                 5² =25 ye hmre no k square se bda ho gya    √20 = 4.47213595 to
 * isme one by one jate h to agr number bda hua time increase hoga o(n)
 *
 */

function sqareRootByLinearSearch(x) {
  for (let i = 1; i <= x; i++) {
    if (i * i === x) {
      return i;
    } else if (i * i > x) {
      return i - 1;
    }
  }
  return 0;
}

/** by binary search
 * agr number 2 se chota h to vo hi return krro bz  0x0=0 ,1x1=1,2x2=4 ->starting point
 *   2 se lekr x/2 search krna h important isse jyda nhi ho skta
 *
 */

var mySqrt = function (x) {
    if(x<2)return x
  let l = 2;
  let r = Math.floor(x / 2);
  while (r >= l) {
    let m = Math.floor((l + r) / 2);
    if (x === m * m) {
      return m;
    } else if (x > m * m) {
       l = m + 1;
    } else {
     r=m-1
    }
  }
  return r;
};

