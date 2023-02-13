/**
 * You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.
 */

/** 
 * test cases - 
 * [7,1,2,3,9] = 28
 * []=0
 * [9]=0
 * [6,9,3,4,5,8] =32
*/


//brute force solution
const bruteForce=(arr)=>{
    let maxArea=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            const area = Math.min(arr[i],arr[j])* Math.abs(j-i);
            if(area> maxArea){
                maxArea= area;
            }
        }
    }
    return maxArea;
}
console.log(bruteForce([]));


const optimized=(arr)=>{
    let maxArea=0;
    let left=0;
    let right= arr.length-1;

    while(left< right){
        let area = Math.min(arr[left],arr[right]) * (right-left);
        maxArea = Math.max(area,maxArea);
        if(arr[left]<=arr[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
}
console.log(`optimized:${optimized([6,9,3,4,5,8])}`);
