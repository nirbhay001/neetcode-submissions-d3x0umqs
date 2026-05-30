class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let queue = [];
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 0) {
                    queue.push([i, j]);
                }
            }
        }
        let direction = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
        ];
        let index = 0;
        while (index < queue.length) {
            let [x, y] = queue[index++];
            for (let [dx, dy] of direction) {
                let fx = x + dx;
                let fy = y + dy;
                if (fx < 0 || fy < 0 || fx >= grid.length || fy >= grid[0].length) {
                    continue;
                }
                if (grid[fx][fy] !== 2147483647) {
                    continue;
                }
                grid[fx][fy] = grid[x][y] + 1;
                queue.push([fx, fy]);
            }
        }
    }
}
