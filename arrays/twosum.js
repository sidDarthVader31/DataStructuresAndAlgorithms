/**
 * Given an array of integers, return the indices of the two numbers that add up to a given target
 */

//first solution - brute force O(n^2) complexity 
function solve(array, sum){
    for(let i =0 ;i< array.length;i++){
        for(let j=i+1 ;j <array.length;j++){
            if(array[i]+ array[j] == sum){
                return [i,j];
            }
        }
    }
    return null;
}

const data = solve([1,3,7,9,2],11);
console.log(`solve:${data}`);



//optimized solution
function optimal(array,sum){
    let map={};
    for(let i =0;i< array.length;i++){
        const numberRequired = sum - array[i];
        if(map[`${array[i]}`]){
            return [i, map[array[i]]];
        }
        else{
            map[numberRequired] =i;
        }
    }
    return null;
}
const data1 = optimal([2,7,11,15],9);
console.log(`data::${data1}`);