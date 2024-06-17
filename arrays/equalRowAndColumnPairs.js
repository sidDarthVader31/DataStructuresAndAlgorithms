/**
 *
 * row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 

Example 1:


Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]
Example 2:


Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 * link: https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
let columnMap = {}
    for(let i =0;i< grid.length;i++){
        let str =[];
        for(let j =0;j< grid.length;j++){
            str.push(grid[j][i])
        }
        if(!columnMap[str]){
            columnMap[str] = 1
        }
        else{
            columnMap[str] = columnMap[str] +1;
        }
        
    }
    //console.log(`columnMap:${JSON.stringify(columnMap)}`)

let map = {}
let count = 0;
    for( let i =0 ;i< grid.length;i++){
        let row = grid[i];
        map[row] = row
        if(columnMap[row]){
            count = count+ columnMap[row]
        }
    }
   // console.log(`row:`, JSON.stringify(map)) 
      return count;
};
