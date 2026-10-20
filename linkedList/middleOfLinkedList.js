/**Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node **/

// ex 1 [1,2,3,4,5,6]
// ex 2 [1,2,3,4,5]

let middle = function (head){
    let slow =head
    let fast =head
    while(fast && fast.next){//jb tkk fast null nhi hota aur fast.next null nhi hota tb tkk chlte rho
        slow=slow.next
        fast=fast.next.next
    }
    return slow
}