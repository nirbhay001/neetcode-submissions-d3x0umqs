class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        function height(node) {
            if (node === null) return 0;
            return 1 + Math.max(height(node.left), height(node.right));
        }

        if (root === null) return true;

        let leftHeight = height(root.left);
        let rightHeight = height(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}