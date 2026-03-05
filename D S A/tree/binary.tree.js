class Node{

    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}

class BinaryTree{

    constructor(){
        this.root  = null
    }

    insert(val){
        let node = new Node(val)

        if(!this.root) return this.root = node

        let queue = [this.root]

        while(queue.length){
            let current = queue.shift()

            if(!    current.left){
               return current.left = node
            }else{
                queue.push(current.left)
            }
            if(!current.right){
                return current.right = node
            }else{
                queue.push(current.right)
            }
        }
    }
    print(node = this.root,res =[]){
        if(node){

            this.print(node.left,res)
            res.push(node.val)
            this.print(node.right,res)
        }
        return res.join(' -> ')
    }
    height (node = this.root){
        if(!node) return -1

        return 1+Math.max(this.height(node.left),this.height(node.right))
    }

    

}

const tree = new BinaryTree()
tree.insert(5)
tree.insert(3)
tree.insert(4)
tree.insert(6)
tree.insert(10)
tree.insert(12)
tree.insert(1)

console.log(tree.print())


function isBST(node,min=-Infinity,max=Infinity){
    if(!node) return true 

    if(node.val<=min||node.val>=max) return false

    return isBST(node.left,min,node.val)&&isBST(node.right,node.val,max)
}

console.log('isBST :',isBST(tree.root))