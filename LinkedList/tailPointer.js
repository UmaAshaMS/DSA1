
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    // append(value){
    //     const node = new Node(value)
    //     if(!this.head){
    //         this.head = node
    //     }
    //     else{
    //         let curr = this.head
    //         while(curr.next){
    //             curr = curr.next
    //         }
    //         curr.next = node
    //     }
    // }

    //append using tail
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            this.tail = node
        }
    }

    // prepend(value){
    //     const node = new Node(value)
    //     if(!this.head){
    //         this.head = node
    //     }
    //     else{
    //         node.next = this.head
    //         this.head = node
    //     }

    // }

    //prepend using tail
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head = node
        }
    }

    // removeLast(){
    //     let curr =this.head
    //     let prev = null
    //     while(curr.next){
    //         prev = curr
    //         curr = curr.next
    //     }
    //     prev.next = null
    //     this.size--
    // }

    removeLast(){
        if(!this.head){
            return console.log('Empty linkedlist')
        }    
        else{
            let curr = this.head
            
            while(curr.next !== this.tail){
                curr = curr.next
            }
            curr.next = null
            this.tail = curr
        }
        this.size--
    }

    // removeFirst(){
    //     if(!this.head){
    //         return console.log('Emty linkedlist')
    //     }
    //     else{
    //         this.head = this.head.next
    //         this.size--
    //     }
    // }

    removeFirst(){
        if(!this.head){
            return console.log('empty linkedlist')
        }
        else{
            this.head.next = this.head
            this.size--
        }
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr = curr.next
        }
    }
}

const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.prepend(5)
list.removeLast()
list.removeFirst()
list.print()