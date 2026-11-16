/* 142. Linked List Cycle II
*
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/

//by using set to store the nodes and check if we have already seen the node before Time: O(n)
// Space: O(n), for the Set

var detectCycle = function(head) {
   let seenSet = new Set()
    let curr=head
    while(curr){
        if(seenSet.has(curr)){ 
            return curr 
            }
         seenSet.add(curr)
       curr=curr.next
    }
    return null
};


//optimal solution by Floyd’s algorithm (O(1) space)Time: O(n)

var detectCycle = function(head) {
    let slow = head, fast = head;

    // Phase 1: detect if a cycle exists
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Phase 2: find the cycle start
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};
