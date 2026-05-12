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
     * @return {number}
     */
    goodNodes(root) {
        function dfs(root, val){
            let count = 0;
            if(root === null){
                return 0;
            }
            if(root.val >= val){
                count = 1;
            }
            val = Math.max(val, root.val);
            count += dfs(root.left, val);
            count += dfs(root.right, val);
            return count;
        }
        return dfs(root, root.val);
    }
}
