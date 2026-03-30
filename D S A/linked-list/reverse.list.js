class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class List {
    constructor(){
        this.head = null
        this.tail = null
    }

    insert(val){
        const node = new Node(val)

        if(!this.head){
            this.head= node
            this.tail= node
            return
        } 
        this.tail.next = node
        this.tail = node

    }
    reversed(node){
        let current = node
        let prev = null
        let next 
        // this.tail = current
        while(current){
            next = current.next
            current.next= prev
            prev = current
            current = next
        }
        // this.head = prev
    }
    print(node){
        let current = this.head
        let res = []
        while(current){
            res.push(current.val)
            current = current.next
        }
        return res.join(' -> ')
    }
    rearange(k){
        let current = this.head
        let preTail = null
        let newHead = null

    
        while(current){
            let count =0
            let groupStart = current

            let temp = current
            while(temp&&count<k){
                temp = temp.next
                count++
            }

            if(count<k) break
            
            let prev = null
            let next = null
            count = 0
            while(current&&count<k){
                next = current.next
                current.next = prev
                prev = current
                current = next
                count++
            }
            console.log(current.val,' -- ',prev.val)
           if(!newHead) newHead = prev

           if(preTail){
            preTail.next = prev
           } 

           preTail=groupStart
        }
        console.log('current :',current)
        if(preTail) preTail.next = current

        this.head = newHead 
    }
}

const list = new List()

for(let i=1;i<=10;i++){
    list.insert(i)
}
console.log(list.print())
console.log('------------------------------')
list.rearange(3)
console.log(list.print())