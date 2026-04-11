/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let map = new Set();
        while(head){
            if(map.has(head)){
                return true;
            }
            map.add(head);
            head = head.next;
        }
        return false;
    }
}
