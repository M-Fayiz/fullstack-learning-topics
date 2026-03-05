class Node{
    constructor(val){
        this.val = val 
        this.next = null
    }
}

class List{
    constructor(){
        this.head = null
        this.tail = null
    }

    insert(val){
        const node = new Node(val)

        if(!this.head ){
            this.head = node
            this.tail = node
            return
        }
        this.tail.next = node
        this.tail = node
        
    }
    print(){
        let res = []
        let current = this.head

        while(current){
            res.push(current.val)
            current = current.next
        }
        console.log(res.join(' -> '))
    }
    customPrint(){
        let res = []
        let temp = []

        let current = this.head
        while(current){
            if(temp.length==3){
                res.push(...temp.reverse())
                temp = []
            }
            
            temp.push(current.val)

            current = current.next
        }
        if(temp.length) res.push(...temp.reverse())
        console.log(res.join(' -> '))
    }
}
// 1,2,3,4,5,6,7,8,9,10 -> 3,2,1,6,5,4,9,8,7,10
const linkedList = new List()
for(let i=1;i<=10;i++){

    linkedList.insert(i)
}
linkedList.print()
console.log('--------------------')
linkedList.customPrint()

function convertToCycle(list){
    let head =list
    let current = list

    while(current.next){
        current=current.next
    }
    current.next=head
}
// convertToCycle(linkedList.head)

function partialCycle(list , k){
    let current = list
    let kth 
    while(current.next){
        if(current.val==k){
            kth = current 
            break
        }
        current = current.next
    }
    if(kth){
        current.next=kth
    }
}

function isCycle(node){
    let slow =node
    let fast = node
    while(fast&&fast.next){
        slow=slow.next
        fast= fast.next.next
        if(slow==fast) return true
    }

    return false
}

console.log('isCycle',isCycle(linkedList.head))
