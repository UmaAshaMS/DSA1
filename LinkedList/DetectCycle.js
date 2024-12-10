//// Function to detect cycle using Floyd's Cycle-Finding Algorithm
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    detectCycles(){
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
    
            if(slow === fast){
                return true
            }
        }
        return false
    }
    

}