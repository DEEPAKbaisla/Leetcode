/** Q 141. Linked List Cycle
 * by hash map :- we will use a set to store the nodes we have seen so far. If we encounter a node that is already in the set, then there is a cycle in the linked list.
 *
 */

var hasCycle = function(head) {
    let seenSet = new Set()  //create set
    let curr =head
    while(curr){
        if(seenSet.has(curr)) return true //if we have already seen this node, then there is a cycle
        
      seenSet.add(curr) //add
       curr=curr.next
    }
    return false
};