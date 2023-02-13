
/**
 * basic approach
 * @param {*} n: nunber 
 * @returns number
 */
const getFibonacci= (n)=>{
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else return (getFibonacci(n-1)+ getFibonacci(n-2));
}

console.log(getFibonacci(5));



/**
 * using memoization
 * @param {*} n 
 * @returns 
 */
let map={};
const getFibonacciTopDown=(n)=>{
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    if(map[n]!= undefined){
        return map[n];
    }
    return map[n]= getFibonacciTopDown(n-1)+ getFibonacciTopDown(n-2);
}
console.log(getFibonacciTopDown(5));

let fib=[];
const getFibonacciBottomUp=(n)=>{
    if(n==0 || n==1){
        return 1;
    }
    fib[0]=1;
    fib[1]=1;
    for(let i=2;i<n;i++){
        fib[i]= fib[i-1]+ fib[i-2];
    }
    return fib[n-1];
}
console.log(getFibonacciBottomUp(5));