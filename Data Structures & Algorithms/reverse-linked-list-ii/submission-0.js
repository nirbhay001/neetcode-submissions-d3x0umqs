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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let newNode = new ListNode(0);
        newNode.next = head;
        let prevNode = newNode;
        let index = 1;
        while(index < left){
            prevNode = prevNode.next;
            index++;
        }

        let current = prevNode.next;
        let lastNext = current;
        let prev = prevNode;
        let i = 0;
        while(i <= right-left){
            let temp = current.next;
            current.next = prev;
            prev = current;
            current = temp;
            i++;
        }
        lastNext.next = current;
        prevNode.next = prev;
        return newNode.next;
    }
}
