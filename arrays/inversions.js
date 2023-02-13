// /**
//  * Implementation of merge sort
//  */

let inversionCount ='\n';
const mergeSort=(unsortedArray)=>{
    if(unsortedArray.length<2){
        return unsortedArray;
    }
    const middle= (unsortedArray.length )/2;
    const leftArray= unsortedArray.splice(0,middle);
    return  merge(mergeSort(leftArray),mergeSort(unsortedArray));
     
}

const merge=(leftArray,rightArray)=>{
    let output=[];
    let current=0;
    let i=0,j=0;
    while(i<leftArray.length && j<rightArray.length){
        if(leftArray[i]<rightArray[j]){
            output[current]= leftArray[i];
            i++;
        }
        else{
            inversionCount = inversionCount + leftArray.length-i
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
console.log(mergeSort([6,5,4,3,2,1]));
console.log(`inversion:${inversionCount}`)