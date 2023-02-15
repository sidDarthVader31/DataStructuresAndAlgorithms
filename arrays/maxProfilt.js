


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
    const length= prices.length
    let leftMin =prices[0];
    let leftArray=[];
    let rightArray=[]
    let rightMax= prices[prices.length-1];


    for(let i=0;i<length;i++){
            leftMin=Math.min(leftMin,prices[i]);
            leftArray.push(leftMin)
    }
    for(let i=length-1;i>=0;i--){
        rightMax= Math.max(rightMax,prices[i])
        rightArray.push(rightMax)
    }
    for(let i=0;i<length;i++){
        console.log("###################")
        console.log(`maxProfit:${maxProfit}`);
        console.log(`leftMin:${leftArray[i]}`);
        console.log(`maxRight:${rightArray[length-i-1]}`)
        maxProfit= Math.max(maxProfit,(rightArray[length-i-1]-leftArray[i]))
    }
    return maxProfit;
}
console.log(`optimized:${optimizedPrices([3,2,6,5,0,3])}`)