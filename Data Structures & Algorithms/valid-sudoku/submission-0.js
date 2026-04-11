class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    let rowSet = Array.from({ length: 9 }, () => new Set());
    let columnSet = Array.from({ length: 9 }, () => new Set());
    let gridSet = Array.from({ length: 9 }, () => new Set());
    for(let i=0; i< board.length; i++){
        for(let j=0; j<board[i].length;j++){
                let cell = board[i][j];
                if (cell === ".") continue;
                if(rowSet[i].has(cell)){
                    return false;
                }
                rowSet[i].add(cell)
                if(columnSet[j].has(cell)){
                    return false;
                }
                columnSet[j].add(cell)
                let grid = Math.floor(i/3) *3 + Math.floor(j/3);
                if(gridSet[grid].has(cell)){
                    return false;
                }
                gridSet[grid].add(cell);
         }
        }
        return true;
    }
}
