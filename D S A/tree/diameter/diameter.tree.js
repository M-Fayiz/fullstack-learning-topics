
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
    print(node = this.root,res=[]){
        if(!node) return 
        this.print(node.left,res)
        res.push(node.val)
        this.print(node.right,res)

        return res.join(' -> ')
    }
}

const tree = new TREE()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)
// tree.insert(6)
console.log(tree.print())

function diameterOfTree(node){
    let diameter =0
    function dfs(node){
        if(!node) return 0

        let left = dfs(node.left)
        console.log(`left (${node.val}()`,left)
        let right = dfs(node.right)
        console.log(`right (${node.val})`,right)
        diameter = Math.max(diameter,left+right)
        return Math.max(left+1,right+1)
    }
   console.log( dfs(node))

   return diameter
}
console.log(diameterOfTree(tree.root))

