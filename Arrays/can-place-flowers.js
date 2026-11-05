/*605. Can Place Flowers
*

approach :

Jab teeno conditions true hongi tabhi flower lagayenge-->
(flowerbed[i] === 0 ) Current position empty honi chahiye  
(i === 0 || flowerbed[i-1] === 0 ) Left empty ho ya left position exist hi na karti ho 
 (i === flowerbed.length-1 || flowerbed[i+1] === 0) Right empty ho ya right position exist hi na karti ho 
 */

var canPlaceFlowers = function(flowerbed, n) {
    for (let i=0;i<flowerbed.length;i++){
        if(             
            flowerbed[i]===0 && 
             (i===0 || flowerbed[i-1] === 0)&& 
             (i===flowerbed.length-1 || flowerbed[i+1]===0) 

             ){ flowerbed[i]=1
              --n
              }
              }
       if(n<=0)return true

    return false
};
