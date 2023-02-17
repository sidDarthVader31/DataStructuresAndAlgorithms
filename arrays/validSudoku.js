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

// A function that returns the result for the entire sudoku board.
function isValidSudoku(board) {
    for (let i = 0; i < 9; i++) {
         for (let j = 0; j < 9; j++) {
             const value = board[i][j];
             if (value !== '.') {
                 if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) | !validBox(board, i, j, value)) {
                     return false;
                 }
             }
         }
     }
     return true;
 };
 
 //The row function.
 function validRow(board, row, col, value) {
     // j represents on column
     for (let j = 0; j < 8; j++) {
         // check if the current column matches the passed in column
         if (j !== col) {
             if (board[row][j] === value) {
                 return false; 
             }
         }
     }
     
     return true;
 }
 
 // The column function.
 function validColumn(board, row, col, value) {
      // j represents on row
     for (let i = 0; i < 8; i++) {
         // check if the current row matches the passed in row
         if (i !== row) {
             if (board[i][col] === value) {
                 return false; 
             }
         }
     }
     
     return true;
 }
 
 //The sub-boxes function.
 function validBox(board, row, col, value) {
     const startRow = row - (row % 3), startCol = col - (col % 3);
     
     for (let i = startRow; i < startRow + 3; i++) {
         for (let j = startCol; j < startCol + 3; j++) {
             if (i !== row && j !== col) {
                 if (board[i][j] === value) {
                     return false;
                 }
             }
         }
     }
     
     return true;
 }

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