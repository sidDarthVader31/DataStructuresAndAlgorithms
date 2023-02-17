/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //valid across row
  //valid across column
  //valid across inner triange
  let areRowsValid = true;
  //check for validity across columns
  let areColumnsValid = isValidAcrossColumn(board);
  if(!areColumnsValid){
    return false;
  }
  //check for validity across rows
  for (let i = 0; i < board.length; i++) {
    let isValid = isValidAcrossRow(board[i]);
    if (!isValid) {
        areRowsValid = false;
      break;
    }
  }

  if(!areRowsValid){
    return false;
  }

    //check for validity across 3x3 grids
};

/**
 *
 * @param {number[]} row
 */
const isValidAcrossRow = (row) => {
  let map = {};
  let isValid = true;
  for (let i = 0; i < row.length; i++) {
    if (row[i] != "." && map[`${row[i]}`]) {
      isValid = false;
      break;
    } else if (row[i] != ".") {
      map[`${row[i]}`] = 1;
    }
  }
  return isValid;
};
/**
 *
 * @param {number[][]} column
 */
const isValidAcrossColumn = (sudoku) => {
  let isValid = true;
  for(let i=0;i<9;i++){
    let map = {};
    for(let j=0;j<9;j++){
        if(sudoku[j][i]!='.' && map[`${sudoku[j][i]}`]){
            isValid=false
            break;
        }
        else if(sudoku[j][i]!="."){
            map[`${sudoku[j][i]}`]=1;
        }
    }
  }
  return isValid;
};

console.log(isValidSudoku([
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))