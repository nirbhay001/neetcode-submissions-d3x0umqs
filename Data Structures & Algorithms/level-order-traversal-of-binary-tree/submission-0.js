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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [root];
        let arr = [];
        if(root === null){
            return [];
        }
        while (queue.length) {
            let arrIn = [];
            let queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                let nodeData = queue.shift();
                arrIn.push(nodeData.val);
                if (nodeData.left !== null) {
                    queue.push(nodeData.left);
                }
                if (nodeData.right !== null) {
                    queue.push(nodeData.right);
                }
            }
            arr.push(arrIn);
        }
        return arr;
    }
}
