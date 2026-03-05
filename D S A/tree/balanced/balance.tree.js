
// Why Are There Multiple Balanced Trees

//  Because different applications have different requirements:

//   > Some prioritize faster search

//   > Some prioritize faster insertion

//   > Some are optimized for disk storage

//   > Some minimize rotations

//   > Some handle huge databases



class Node{
    constructor(val){
        this.val = val 
        this.left = null
        this.right = null
    }
}

class TREE{
    constructor(){
        this.root = null
    }

    insert(val){
        const node  = new Node(val)

        if(!this.root) return this.root = node
        let queue = [this.root]
        
        while(queue.length){
            const current = queue.shift()

            if(current.left==null){
                return current.left = node
            }else{
                queue.push(current.left)
            }

            if(!current.right ){
                return current.right = node
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
tree.insert(4)
tree.insert(5)
tree.root.left.left.left = new Node(6)

console.log(JSON.stringify(tree.root))


function isBalanced(node){

    function check(node){
        if(!node) return 0

        let left = check(node.left)
        if(left==false) return false

        let right = check(node.right)
        if(right==false) return false
       
        if(Math.abs(left-right)>1) return false
        return Math.max(left,right)+1
    }

    return check(node)!==false
}

console.log('isBalanced :',isBalanced(tree.root))

// AVL tree