class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    height(root) {
        if (root == null) {
            return 0;
        }
        return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
    isBalanced(root) {
        if (root === null) {
            return true;
        }
        let left = this.height(root.left);
        let right = this.height(root.right);
        if (Math.abs(left - right) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}
