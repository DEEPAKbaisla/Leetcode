/**
 * 
 */


//  print no from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i)
}
//nested loops
// Q print this pattern
// *
// **
// ***
// ****
// *****
for(let i=0;i<5;i++){//Ye loop decide karta hai ki kitni rows print hongi.
    let row =""
    for(let j=0;j<=i;j++){//Ye loop decide karta hai ki current row mein kitne stars honge.
        row =row + "*"
    }
    console.log(row)
}

// Q  1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5

for(let i =0;i<5;i++){
    let row = ""
    for(let j=0;j<=i;j++ ){
        row =row + (j+1)
    }
    console.log(row)
}


// Q  1 2 3 4 5
//    1 2 3 4
//    1 2 3
//    1 2
//    1

for(let i=5;i>0;i-- ){
    let row=" "
    for(let j=0 ;j<i;j++){
        row =row + (j+1) 
    }
    console.log(row)
}




//Q         *             working     i | star (i+1) | space (n-(i+1)) 
//         **                         0 |   1        | 4 
//        ***
//       ****
//      *****

function print(n){
for(let i=0 ;i<n;i++){
let row = " "
    for(let j= 0;j<n-(i+1);j++){
        row = row + " "
    }
    for( let k = 0 ;k<i+1;k++){
        row =row + "*"
    }
    console.log(row)
}}
console.log(print(6))