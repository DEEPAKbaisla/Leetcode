// 121. Best Time to Buy and Sell Stock
// (profit =  buying value - selling value )
// 1. Buy at the lowest price and sell at the highest price after that.
// 2. Keep track of the minimum price and maximum profit as we iterate through the prices array.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.



var maxProfit = function(prices) {
    let minPrice=prices[0]
    let maxprofit = 0
    for(let i=1 ;i<prices.length;i++){
      if(prices[i]-minPrice > maxprofit){
        maxprofit= prices[i]-minPrice
      }
      if(prices[i]<minPrice){
        minPrice=prices[i]
      }
    }
    return maxprofit
};