class Node{
    constructor(val){
        this.val = val 
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(){
        this.root = null
    }
    insert(val){
        const node  = new Node(val)

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

const tree = new Tree()
tree.insert(5)
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(6)
tree.insert(7)
tree.insert(8)
tree.insert(9)


function isPerfect(root){

    function  height(node){
        if(!node) return 0

        return Math.max(height(node.left),height(node.right))+1
    }
    function countOfNode(node){
        if(!node) return 0

        return 1+countOfNode(node.left)+countOfNode(node.right)
    }

    console.log('c',countOfNode(root))
    const h = height(root)
    const count = countOfNode(root)
    console.log('h',h)
    return count === Math.pow(2,h)-1
}

console.log(isPerfect(tree.root))


