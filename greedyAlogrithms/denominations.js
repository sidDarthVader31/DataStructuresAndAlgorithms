/**
 given a non-negative integer moneymoney, find the minimum number of coins with denominations 1, 5, and 10 that changes money. For example, the minimum number of coins needed to change money = 28money=28 is 6: 28 = 10+10+5+1+1+128=10+10+5+1+1+1. This representation of 2828 already suggests an algorithm. We take a coin cc with the largest denomination that does not exceed moneymoney. Afterward, we face essentially the same problem: change (money − c)(money−c) with the minimum number of coins.
 */


 const getDenominations=(money)=>{
    const denominations=[1,5,10];
    let numOfCoins=0;
    while(money>0){
        if(money>= denominations[2]){
            money= money-denominations[2];
            numOfCoins++;
        }
        else if(money>= denominations[1]){
            money= money-denominations[1];
            numOfCoins++;
        }
        else if(money>= denominations[0]){
            money= money-denominations[0];
            numOfCoins++;
        }
        else{
            break;
        }
    }
    return numOfCoins;
 }
 console.log(getDenominations(28));