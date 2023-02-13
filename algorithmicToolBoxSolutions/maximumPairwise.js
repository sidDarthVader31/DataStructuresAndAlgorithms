// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    //we will use merge sort to sort array and get last two elements product which will be the maximum pairwise product
    //for the given input
    const maxIndex= arr.length-1;
    const maxArr= mergeSortArrays(arr);

    return maxArr[maxIndex]* maxArr[maxIndex-1];
}


// /**
//  * Implementation of merge sort
//  */


const mergeSortArrays=(unsortedArray)=>{
    if(unsortedArray.length<2){
        return unsortedArray;
    }
    const middle= (unsortedArray.length )/2;
    const leftArray= unsortedArray.splice(0,middle);
    return mergeArrays(mergeSortArrays(leftArray),mergeSortArrays(unsortedArray));
}

const mergeArrays=(leftArray,rightArray)=>{
    let output=[];
    let current=0;
    let i=0,j=0;
    while(i<leftArray.length && j<rightArray.length){
        if(leftArray[i]<rightArray[j]){
            output[current]= leftArray[i];
            i++;
        }
        else{
            output[current]= rightArray[j];
            j++;
        }
        current++;
    }
    for(let k=i;k<leftArray.length;k++){
        output[current]=leftArray[k]
        current++;
    };
    for(let l=j;l<rightArray.length;l++){
        output[current]=rightArray[l]
        current++;
    };

    return [...output]
}
module.exports = max;