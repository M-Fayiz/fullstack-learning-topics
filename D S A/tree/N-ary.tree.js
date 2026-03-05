class Node{
    constructor(val){
        this.val = val
        this.children = []
    }
}

class Tree {
    constructor(){
        this.root = null
    }

    setRoot(val){
        const node = new Node(val)
       
        return  this.root = node
    }
    insertNode(val,parent){
        const node  = new Node(val)
        parent.children.push(node)
        return node
    }
    traverse(){
        let queue = [this.root]
        let res = []
        while(queue.length){
            let current = queue.shift()
            res.push(current.val)
            if(current.children.length>0){
                queue.push(...current.children)
            }
        }

        console.log(res)
    }
}

const tree = new Tree()
const root=tree.setRoot(5)

const child1= tree.insertNode(10,root)
const child2= tree.insertNode(15,root)
const child3= tree.insertNode(14,child1)
const child4= tree.insertNode(13,child2)

console.log(JSON.stringify(tree.root))


tree.traverse()