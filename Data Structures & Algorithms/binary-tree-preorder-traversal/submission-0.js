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
    preorderTraversal(root) {
        let result = [];

        function tranversal(root){
            if(root === null){
                return;
            }
            result.push(root.val);
            tranversal(root.left);
            tranversal(root.right);
        }
        tranversal(root);
        return result;
    }
}
