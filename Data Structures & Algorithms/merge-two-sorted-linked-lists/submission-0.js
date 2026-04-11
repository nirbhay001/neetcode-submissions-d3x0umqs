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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let newHead = new ListNode(0);
        let current = newHead;
        while(list1 && list2){
            let node = new ListNode(0);
            if(list1.val<=list2.val){
                node.val = list1.val;
                list1=list1.next;
            } else{
                node.val = list2.val;
                list2=list2.next;
            }
current.next = node;
current = current.next;
        }
            while (list1) {
        let node = new ListNode(list1.val);
        current.next = node;
        current = current.next;
        list1 = list1.next;
    }

    while (list2) {
        let node = new ListNode(list2.val);
        current.next = node;
        current = current.next;
        list2 = list2.next;
    }

    return newHead.next;
    }
}
