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
        let map = new Map();
        while(head){
            if(map.has(head.next)){
                return true;
            }
            map.set(head.next, head.val);
            head = head.next;
        }
        return false;
    }
}
