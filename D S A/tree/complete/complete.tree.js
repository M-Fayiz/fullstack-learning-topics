// In a complete binary tree, every level is fully filled except maybe the last one
// and the nodes in the last level are filled from left to right without any gap

class Node{
    constructor(val){
        this.val = val 
        this.left = null
        this.right = null
    }
}

class TREE {
    constructor(){
        this.root = null
    }
    insert (val){
        const node = new Node(val)
        if(!this.root) return this.root = node
       let queue = [this.root]

       while(queue.length){
        const current = queue.shift()
        if(!current.left){
            current.left =  node
            return
        }else{
            queue.push(current.left)
        }
        if(!current.right){
            current.right = node
            return
        }else{
            queue.push(current.right)
        }
       }
    }
    
}


const tree = new TREE()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.root.left.left = null
tree.root.left.right = new Node(5)

console.log(JSON.stringify(tree.root))

function isComplete(node){
  
    let queue = [node]
    let seen = null
    while(queue.length){
        const current = queue.shift()

        if(!current){
            seen = true
        }else{
            if(seen) return false

            queue.push(current.left)
            queue.push(current.right)
        }
    }
    return true

}
// Seen  , Queue would be like this , [1 ,2,null, 5]: not complete tree
// Q "[1,3,4,null,null,null]: complete tree"
console.log('completed :',isComplete(tree.root))