class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
            maxAreaOfIsland(grid) {
        let count=0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]==1){
                    let rt = this.findIland(i, j, grid);
                    count = Math.max(count, rt);
                }
            }
        }
        return count;
    }

    findIland(i, j, grid){
        let row = grid.length;
        let col = grid[0].length;
        let newArr = [ [i, j + 1], [i, j - 1], [i + 1, j], [i - 1, j]];
        if((i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === 0)){
            return 0;
        }
        grid[i][j] = 0;
        let area = 1;

        for (let [dx, dy] of newArr) {
            let ni = dx;
            let nj = dy;
            area += this.findIland(ni, nj, grid);
        }
        return area;
    }
}
