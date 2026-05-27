class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let sum = 0;
        function dfs(i, j, grid) {
            if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
                return 1;
            }

            // water
            if (grid[i][j] === 0) {
                return 1;
            }

            // already visited
            if (grid[i][j] === -1) {
                return 0;
            }
            let perimeter = 0;

            grid[i][j] = -1;
            let direction = [[0, 1], [1, 0], [-1, 0], [0, -1]];
            for (let [x, y] of direction) {
                let dx = i + x;
                let dy = j + y;
                perimeter += dfs(dx, dy, grid);
            }
            return perimeter;
        }

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    sum = dfs(i, j, grid);
                }
            }
        }
        return sum;
    }
}
