
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

function isFullBinaryTree(root){

    function check (node){

        if(!node) return true
    
        if(!node.left&&!node.right) return true

      
        
        if(node.right&&node.left){
            return check(node.left)&&check(node.right)
        }
        return false
    }
    return check(root) !==false
}

console.log(isFullBinaryTree(tree.root))