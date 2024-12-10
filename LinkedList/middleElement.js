//: Write a function to find the middle element of a singly linked list. 
//If there are two middle nodes (for example, in a list with an even number of elements), return the second middle node.

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }
        else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
// returning second middle lement if it is even numbered linked list
    middleElement(){
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    //returning first middle lement, if it is even number linked list
    middleFirstElement(){
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next !== null){
            fast = fast.next.next
            if(fast !== null && fast.next !== null){
                slow = slow.next
            }
        }
        return slow.value
    }
}


const list = new Linkedlist()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()
console.log('Middle element is : ',list.middleElement())
console.log('Middle element is : ',list.middleFirstElement())