//prepend

class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    //prepend()
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = node
        }
        else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

    removeFirst(){
        this.head =  this.head.next
        this.head.prev = null
        this.size--
    }

    removeLast(){
        if(!this.head){
            return console.log('Empty')
        }
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }
        else{
            this.tail = this.tail.prev
            this.tail.next  = null
        }
        this.size--
    }

    print(){
        let curr = this.head
        while(curr){
            console.log(curr.value)
            curr= curr.next
        }
    }

    printReverse(){
        let curr = this.tail
        while(curr){
            console.log(curr.value)
            curr = curr.prev
        }
    }

}

const list = new LinkedList()
list.prepend(5)
list.append(10)
list.append(20)
list.append(30)
list.print()
list.printReverse()

list.removeFirst()
list.removeLast()
list.print()
