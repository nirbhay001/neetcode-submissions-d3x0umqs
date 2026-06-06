class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let row = board.length;
        let col = board[0].length;
        function dfs(x, y) {
            if (x < 0 || y < 0 || x >= row || y >= col || board[x][y] !== "O") {
                return;
            } else {
                board[x][y] = "T";
            }
            let direction = [
                [0, 1],
                [1, 0],
                [-1, 0],
                [0, -1],
            ];

            for (let [a, b] of direction) {
                let dx = a + x;
                let dy = b + y;
                dfs(dx, dy);
            }
        }
        for (let i = 0; i < row; i++) {
            if (board[i][0] == "O") {
                dfs(i, 0);
            }
            if (board[i][[col - 1]] == "O") {
                dfs(i, col-1);
            }
        }
        for (let i = 0; i < col; i++) {
            if (board[0][i] == "O") {
                dfs(0, i);
            }
            if (board[row - 1][i] == "O") {
                dfs(row - 1, i);
            }
        }
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === "O") {
                    board[i][j] = "X";
                } else if (board[i][j] === "T") {
                    board[i][j] = "O";
                }
            }
        }
        return board;
    }
}
