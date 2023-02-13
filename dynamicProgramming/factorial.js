/**
 * simple approach
 */

const factorial=(n)=>{
    if(n<=1){
        return 1;
    }
    else{
        return n* factorial(n-1);
    }
}
console.log(factorial(5));


/**
 * top down approach
 */
let map={};

const factorialTopDown=(n)=>{
    if(n<=1){
        return 1;
    }
    if(map[n]!= undefined){
        return map[n];
    }
    return map[n]= n* factorial(n-1);
}
console.log(factorialTopDown(5));

let fact=[];
const factorialBottomUp=(n)=>{
    if(n<=1){
        return 1;
    }
    fact[0]=1;
    for(let i=1;i<=n;i++){
        fact[i]= fact[i-1]* (i+1);
    }
    return fact[n-1];
}
console.log(factorialBottomUp(5));

