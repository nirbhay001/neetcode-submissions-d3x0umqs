class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count=0;
        for(let i=0;i<grid.length;i++){
            for(let j=0;j<grid[0].length;j++){
                if(grid[i][j]=='1'){
                    count++;
                    this.findIland(i, j, grid);
                }
            }
        }
        return count;
    }

    findIland(i, j, grid){
        let row = grid.length;
        let col = grid[0].length;
        let newArr = [
            [i, j + 1],    
            [i, j - 1],     
            [i + 1, j],     
            [i - 1, j],    
        ];
        if((i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0')){
            return;
        }
        grid[i][j] = '0';
        for (let [dx, dy] of newArr) {
            let ni = dx;
            let nj = dy;
            this.findIland(ni, nj, grid);
        }
    }
}
