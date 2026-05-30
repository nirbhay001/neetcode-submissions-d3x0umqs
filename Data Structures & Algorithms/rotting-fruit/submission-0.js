class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let queue = [];
        let fresh = 0;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                }
                if (grid[i][j] === 1) {
                    fresh++;
                }
            }
        }
        if (fresh === 0) {
            return 0;
        }

        let direction = [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1],
        ];
        let index = 0;
        let minute = 0;
        while (index < queue.length && fresh > 0) {
            let size = queue.length - index;
            for (let i = 0; i < size; i++) {
                let [x, y] = queue[index++];
                for (let [dx, dy] of direction) {
                    let fx = x + dx;
                    let fy = y + dy;
                    if (fx < 0 || fy < 0 || fx >= grid.length || fy >= grid[0].length) {
                        continue;
                    }

                    if (grid[fx][fy] != 1) {
                        continue;
                    }
                    grid[fx][fy] = 2;
                    fresh--;
                    queue.push([fx, fy]);
                }
            }
            minute++;
        }
        return fresh === 0 ? minute : -1;
    }
}
