function Node(x){
    this.value=x
    this.next=null
}
function MyLinkedList(){
    this.head=null
    this.size=0
}
MyLinkedList.prototype.addAtHead = function(x){
    let newNode =new Node(x)
    newNode.next=this.head
    this.head=newNode
    this.size++
}
MyLinkedList.prototype.addAtTail = function(x){
    let newNode =new Node(x)
    /** agr linkedlist empty hai to node uspe hi add kiya jayega verna  */
    if(this.head ===null){
        this.head=newNode
    }else{
    let curr= this.head
   //jb tkk curr.next null nhi hota curr ko aage chlte rho 
    while(curr.next!=null){
        curr=curr.next
    }
    curr.next=newNode
}
this.size ++
}

MyLinkedList.prototype.addAtIndex = function(index,x){
    //corner case agr index agr index -1 or size se jyda ho 
  if (index < 0 || index > this.size) return;  
 
  if(index===0){
    this.addAtHead(x)
    return
  }
  if(this.size ===index){
    this.addAtTail(x)
    return
  }
   let newNode =new Node(x)
   let curr = this.head
 for(let i = 0; i<index-1;i++){
    curr=curr.next
 }
 newNode.next=curr.next
 curr.next=newNode
 this.size++
}
MyLinkedList.prototype.print =function(){
     let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }


MyLinkedList.prototype.removeAtIndex = function (index){
    if (index < 0 || index >= this.size) return;
    if(index===0){
        this.head=this.head.next
    }else{
        let curr= this.head
        for(let i=0;i<index-1;i++){
            curr=curr.next
        }
        curr.next =curr.next.next
    }
    this.size --
}


let list = new MyLinkedList();

console.log(list.addAtHead(10));      // 10
list.addAtTail(20);      // 10 -> 20
list.addAtTail(30);      // 10 -> 20 -> 30
list.addAtIndex(1, 15);  // 10 -> 15 -> 20 -> 30
list.removeAtIndex(2);  // 10 -> 15 -> 30