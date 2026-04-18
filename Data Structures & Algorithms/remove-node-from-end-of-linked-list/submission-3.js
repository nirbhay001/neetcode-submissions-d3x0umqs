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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let index = 1;
        let newNode = head;
        let current = newNode;
        let length = 0;
        while (current) {
            length++;
            current = current.next;
        }

        // Step 2: Find position from start
        let target = length - n;

        // Step 3: If head needs to be removed
        if (target === 0) {
            return head.next;
        }
        current = head;
        while(current){
            if(index === length-n){
                current.next = current.next.next;
            } else{
                current = current.next;
            }
            index++;
        }
        return newNode;
    }
}
