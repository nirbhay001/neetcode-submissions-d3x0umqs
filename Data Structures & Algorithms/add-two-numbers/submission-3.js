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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let carry = 0;
        let newNode = new ListNode(0);
        let current = newNode;
        while(l1 || l2){
            let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
            let digit = sum % 10;
            carry = Math.floor(sum / 10);
            let sumNode = new ListNode(digit);
            current.next = sumNode;
            current = current.next;
            if(l1){
                l1 = l1.next;
            }
            if(l2){
                l2 = l2.next;
            }
        }
        if(carry){
            current.next = new ListNode(carry);
        }
        return newNode.next;
    }
}
