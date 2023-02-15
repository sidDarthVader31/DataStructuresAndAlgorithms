


/**
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit=0;

    for(let i=0;i<prices.length;i++){
        for(let j=i+1;j<prices.length;j++){
            maxProfit= Math.max(maxProfit,prices[j]-prices[i])
        }
    }
    return maxProfit;
};

/**
 * 
 * @param {number[]} prices 
 */
const optimizedPrices=function(prices){
    let maxProfit=0;
    let left =0;
    let right= prices.length-1;

    while(left<right){
         console.log(`left:${left}::${prices[left]}`)
         console.log(`right:${right}::${prices[right]}`);
         console.log(`maxProfilt:${maxProfit}`);
        maxProfit=Math.max(maxProfit,(prices[right]-prices[left]));
        if(prices[left]>=prices[right]){
            left ++;
        }
        else{
            right--;
        }
    }
    return maxProfit;
}
console.log(`optimized:${optimizedPrices([7,1,5,3,6,4])}`)