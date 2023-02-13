/**
 * Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped
 */

//test case : - [0,1,0,2,1,0,3,1,0,1,2] =8

//brute force solution O(n2)
const waterTrapped = (pipes) => {
  let quantity = 0;
  let maxL = 0;
  let maxR = 0;
  for (let i = 0; i < pipes.length; i++) {
    for (let j = 0; j < i; j++) {
      maxL = Math.max(maxL, pipes[j]);
    }
    for (let k = i + 1; k < pipes.length; k++) {
      maxR = Math.max(pipes[k], maxR);
    }
    //now we have max and min on either side of our pointer i
    const water = Math.min(maxL, maxR) - pipes[i];
    if (water > 0) {
      quantity += water;
    }
    maxL = 0;
    maxR = 0;
  }
  return quantity;
};

console.log(waterTrapped([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));

//optimized solution

const optimizedSolution = (height) => {
  let quantity = 0;
  let left = 0,
    right = height.length - 1;
  let maxL = 0
  let maxR =0;

  while(left <right){ 
    maxL = Math.max(maxL,height[left]);
    maxR = Math.max(maxR,height[right]);
    if(height[left]<height[right]){
        if(maxL>height[left]){
            water = maxL- height[left];
            if(water > 0){
                quantity += water;
            }
        }
        left++;
    }
    else{
        if(maxR>height[right]){
            water = maxR - height[right];
            if(water > 0){
                quantity += water;
            }
        }
        right--;
    }
  }
  return quantity;
};
console.log(optimizedSolution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
