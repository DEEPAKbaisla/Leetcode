/*13. Roman to Integer
*simple solution to convert roman numerals to integers
1->Normally, Roman numerals are written big to small, and you just add them up:

VIII = 5 + 1 + 1 + 1 = 8
XII = 10 + 1 + 1 = 12

2->But sometimes a small number comes before a big number. That means "subtract the small one":

IV = 5 - 1 = 4 (not 1 + 5)
IX = 10 - 1 = 9
XL = 50 - 10 = 40 
*/

var romanToInt = function (s) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = values[s[i]];      // value of the current letter
    const nextValue = values[s[i + 1]];     // value of the next letter

    if (nextValue > currentValue) {
      total = total - currentValue;         // small before big → subtract
    } else {
      total = total + currentValue;         // otherwise → add
    }
  }

  return total;
};