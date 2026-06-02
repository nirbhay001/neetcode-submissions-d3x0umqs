class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pacific = new Set();
        let atlantic = new Set();
        let rows = heights.length;
        let cols = heights[0].length;

        function dfs(r, c, visited, prevHeight) {
            if (r < 0 || c < 0 || r >= rows || c >= cols) {
                return;
            }
            const key = `${r},${c}`;
            if (visited.has(key)) {
                return;
            }
            if (heights[r][c] < prevHeight) {
                return;
            }
            visited.add(key);
            dfs(r + 1, c, visited, heights[r][c]); // Down
            dfs(r - 1, c, visited, heights[r][c]); // Up
            dfs(r, c + 1, visited, heights[r][c]); // Right
            dfs(r, c - 1, visited, heights[r][c]); // Left
        }
        // Pacific Ocean (Top Row)
        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacific, heights[0][c]);
        }

        // Pacific Ocean (Left Column)
        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacific, heights[r][0]);
        }

        // Atlantic Ocean (Bottom Row)
        for (let c = 0; c < cols; c++) {
            dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
        }

        // Atlantic Ocean (Right Column)
        for (let r = 0; r < rows; r++) {
            dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
        }

        const result = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const key = `${r},${c}`;

                if (pacific.has(key) && atlantic.has(key)) {
                    result.push([r, c]);
                }
            }
        }

        return result;
    }
}
