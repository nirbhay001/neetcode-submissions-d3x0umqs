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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        function delNode(root, target) {
            if (root === null) {
                return null;
            }
            root.left = delNode(root.left, target);
            root.right = delNode(root.right, target);
            if (root.val === target && root.left === null && root.right === null) {
                return null;
            }
            return root;
        }
        return delNode(root, target);
    }
}
