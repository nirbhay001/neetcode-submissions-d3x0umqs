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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        function smallest(root){
            if(root === null){
                return null;
            }
            let left = smallest(root.left);

            if (left !== null) {
                return left;
            }

            k--;
            if(k==0){
                return root.val;
            }
            return smallest(root.right, k);
        }
        return smallest(root);
    }
}
