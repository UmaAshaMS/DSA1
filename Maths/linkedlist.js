class Node {
    constructor(value){
        this.value = value
        this.next = null 
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    //To prepend, make the new node as the head
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    //To print traverse till the next is null, console.log() it 
    print(){
        if(this.isEmpty()){
            console.log('List is empty')
        }
        else{
             let current = this.head
             while(current){
                console.log(current.value)
                current = current.next
             }
        }
    }

    //To append, traverse to the last of the linked list, 
    // find the last node, point it to the new node 
    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }

    //Insert at a specific position
    
    // insertAt(value, index){
    //     if(index < 0 || index > this.size){
    //         return 'Invalid insertion'
    //     } 

    //     const node = new Node(value)
    //     let prev = this.head
    //     for(let i = 0; i < index - 1; i++){
    //         prev = prev.next
    //     }
    //     node.next = prev.next
    //     prev.next = node
    //     this.size++
    // }

    //Insert at a specific position : traverse till the index and 
    //point the prev to the node and 
    //the next of node points to the curr 
    insertAt(value,index){
        const node = new Node(value)
        let prev = null
        let curr = this.head
        for(let i = 0 ; i < index; i++){
            prev = curr
            curr = curr.next 
        }
        prev.next = node
        node.next = curr
        this.size++
    }

     //SEARCH
     search(value){
        if(this.isEmpty()){
            return 'Invalid search'
        }
        let i = 0;
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    //Remove by index
    //Traverse till the index, then make the prev point to the next of curr,thus omiting the curr node 
    remove(index){
        if(index < 0 || index > this.size){
            return 'Invalid index'
        }

        let prev = this.head
        for(let i = 0; i < index - 1; i++){
            prev = prev.next
        }
        const removeNode = prev.next
        prev.next = removeNode.next
        this.size--
        return removeNode.value
    }

    //remove by value
    //Traverse through the linkedlist, and if the curr.value matches, then  prev.next = curr.next, thus skipping the curr node
    removeByValue(value){
        let prev = null
        let curr = this.head
        while(curr.next){
            if(curr.value === value){
                prev.next = curr.next
                this.size--
            }
            prev = curr
            curr = curr.next
        }
    }

    //Remove first node
    //Make the next of head as head
    removeFirst(){
        if(this.size === 0){
            console.log('Linkedlist empty')
        }
        else{
            this.head = this.head.next
            this.size--
        }
    }

    //Traverse till the last element, make the prev of curr point to null
    removeLast(){
        if(this.size === 0){
            console.log('Empty linkedlist')
        }
        let curr = this.head
        let prev = null
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        prev.next = null
        this.size--
    }

    //Traverse till the middle index, same as removing last element
    //make the prev of curr point to the next of the curr, thus skipping the middle element
    removeMiddle(){
        let prev = null
        let curr = this.head
        const middleIndex = Math.floor(this.size / 2)
        for(let i = 0; i < middleIndex; i++){
            prev = curr
            curr = curr.next
        }
        prev.next = curr.next
        this.size--
    }

    reverse(){
        let prev = null
        let curr = this.head
        let next = null

        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeDuplicates(){
        let current = this.head
        let seen = new Set()
        let prev = null
        while(current){
            if(seen.has(current.value)){
                prev.next = current.next
                this.size--
            }
            else{
                seen.add(current.value)
                prev = current
            }
            current = current.next

        }
    }
}

const list = new linkedList()
console.log('List is empty ?', list.isEmpty())
console.log('List size : ', list.getSize())

//ADD NEW NODE AT THE BEGGINING - PREPEND
list.prepend(20)
list.prepend(10)

list.append(30)
list.append(40)
list.append(50)
list.append(40)

// list.insertAt(35,3)
// list.removeByValue(35)
list.print()
list.removeDuplicates()
console.log('Remove duplicates')
list.print()

console.log('Afeter reversing')
list.reverse()
list.print()


// list.removeMiddle()

// list.insert(50,2)
// list.insert(60,3)

// console.log(list.search(10))
// console.log(list.search(20))

// list.removeFirst()
// list.removeLast()


// list.remove(2)

//PRINT
// list.print()
console.log('Size after prepending : ',list.getSize())

