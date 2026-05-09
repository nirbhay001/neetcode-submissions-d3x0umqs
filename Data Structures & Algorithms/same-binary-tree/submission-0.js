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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        function compareNode(p, q) {
            if(p === null && q === null){
                return true;
            } else if(p === null && q !== null){
                return false;
            } else if(p !== null && q === null){
                return false;
            }
            if (p.val !== q.val) {
                return false;
            }
            let left = compareNode(p.left, q.left);
            let right = compareNode(p.right, q.right);
            return left && right;
            
        }
        return compareNode(p, q);
    }
}
