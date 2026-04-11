class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length;
        let col = matrix[0].length;
        let start = 0;
        let end = row * col - 1;
        while(start <= end){
            let mid = Math.floor((start + end) / 2);
            let r = Math.floor(mid/col);
            let c = mid % col;
            let element = matrix[r][c];
            if(element === target){
                return true;
            } else if(element < target) {
                start = mid + 1 
            } else{
                end = mid - 1;
            }
        }
        return false;
    }
}
