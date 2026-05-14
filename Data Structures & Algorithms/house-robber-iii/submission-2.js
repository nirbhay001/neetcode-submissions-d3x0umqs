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
    rob(root) {
        let memo = new Map();
        function countRoot(root) {
            if (root === null) {
                return 0;
            }
            if (memo.has(root)) {
                return memo.get(root);
            }

            let count = root.val;
            if (root.left) {
                count += countRoot(root.left.left);
                count += countRoot(root.left.right);
            }
            if (root.right) {
                count += countRoot(root.right.left);
                count += countRoot(root.right.right);
            }
            let skip = countRoot(root.left) + countRoot(root.right);
            let ans = Math.max(count, skip)
            memo.set(root, ans);
            return ans;
        }

        return countRoot(root);
    }
    // rob(root) {
    //     function countRoot(root){
    //         if(root === null){
    //             return 0;
    //         }
    //         let count = 0;
    //         if(root.left && root.left.left){
    //             count++;
    //         }
    //         if(root.right && root.right.right){
    //             count++;
    //         }
    //         count += countRoot(root.left);
    //         count += countRoot(root.right);
    //         return count;
    //     }
    //     return countRoot(root);
    // }
}
