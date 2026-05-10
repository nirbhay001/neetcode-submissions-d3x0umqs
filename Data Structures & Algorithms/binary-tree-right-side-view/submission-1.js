/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        let arr = [];
        let retArr = [];
        let queue = [root];
        if(root === null){
            return [];
        }
        while(queue.length){
            let arrIn = [];
            let queueLength = queue.length;
            for(let i = 0; i<queueLength; i++){
                let first = queue.shift();
                arrIn.push(first.val);
                if(first.left !==null){
                    queue.push(first.left);
                }
                if(first.right !== null){
                    queue.push(first.right);
                }
            }
            arr.push(arrIn);
        }
        for(let i=0; i < arr.length; i++){
            retArr.push(arr[i][arr[i].length-1]);
        }
        return retArr;
    }
}
