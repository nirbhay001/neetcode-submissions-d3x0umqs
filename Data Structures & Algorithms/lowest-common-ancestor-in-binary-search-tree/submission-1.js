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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if(root === null){
            return;
        }
        let left = root.left;
        let right = root.right;
        if(root.val > p.val && root.val>q.val){
            return this.lowestCommonAncestor(left, p, q);
        }
        if(root.val < p.val && root.val<q.val){
            return this.lowestCommonAncestor(right, p, q);
        }
        return root;
    }
}
