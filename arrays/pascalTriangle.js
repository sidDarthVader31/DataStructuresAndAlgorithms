
/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]

 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let rowArray=[[1]];
    for(let i=1;i<numRows;i++){
        let arr=rowArray[i-1];
        let tempRow=[1];
        for(let j=1;j<=i;j++){
            console.log(`j:${j}:::${arr[j-1]||0}+${arr[j]||0}`)
            tempRow[j]=(arr[j-1]||0) + (arr[j]||0);
        }
        rowArray.push(tempRow)
    }
    return rowArray;
};
console.log(generate(5));