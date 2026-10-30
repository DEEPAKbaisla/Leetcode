/** Q-206. Reverse Linked List
*  Input: head = [1,2,3,4,5]
*         Output: [5,4,3,2,1]
**/


var reverseList = function(head) {
    let prev = null
    let curr = head
    while (curr){
        let temp  = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    head  = prev
    return head 
};