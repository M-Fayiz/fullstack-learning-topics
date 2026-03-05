class Node {
    constructor(val){
        this.val = val 
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(val){
        const node = new Node(val)
        if(!this.root) return this.root = node
        
        this.add(this.root , node)

    }
    add(node , newNode){

        if(newNode.val<node.val){
            if(!node.left){
                return node.left = newNode
            }else{
                this.add(node.left,newNode)
            }
        }else{
            if(!node.right){
                return node.right = newNode

            }else {
                this.add(node.right,newNode)
            }
        }
    }
    findLeftNode(node = this.root , res=[]){
        if(node){
            this.findLeftNode(node.left,res)
            if(node.left){
                res.push(node.left.val)
            }
            this.findLeftNode(node.right,res)
        }
        return res
    }
    findKthValue(k){
       
        let count =0
        let res=null
        function inOrder(node){
            if(!node) return

            inOrder(node.right)
            count++
            if(count==k){
                res = node.val
                return 
            } 

            inOrder(node.left)
        }

         inOrder(this.root)
         return res
    }
    InOrder(node = this.root, res =[]){
        if(!node) return

        this.InOrder(node.left,res)
        res.push(node.val)
        this.InOrder(node.right,res)

        return res.join(' -> ')
    }
    countOfLeafNode(){
   
        let res = []
        let count = 0
        const inOrder=(node)=>{
            if(!node ) return 
            if(!node.left&&!node.right) {
                count++
                res.push(node.val)
            } 
            inOrder(node.left)
            inOrder(node.right)
        }

        inOrder(this.root)

        return {count,res}
    }

    BFS(){
        let queue = [this.root]

        let res = []
        while(queue.length){
            let level = queue.length
            let arr = []

            for(let i =0 ;i<level;i++){

                let current = queue.shift()
                arr.push(current.val)

                if(current.left) queue.push(current.left)
                if(current.right) queue.push(current.right)
            }
            res.push(arr)
        }
        console.log(res);
        for(let node of res){
            console.log(node.join(' - '))
        }
        // return res.join(' -> ')
    }
    kthValue(k){
        let count =0
        let result = null
        function inOrder(node){
           
            if(!node||result!==null) return 
           
            
             inOrder(node.right)
            count++
            if (count === k){
               result =node.val
                return
            }
        
           inOrder(node.left)
        }
        inOrder(this.root)
        console.log(result)
    }
    InOrderInStack(){
        let res =[]
        let stack = []
        let current = this.root
        
        while(current||stack.length){
           
                while(current){
                    stack.push(current)
                    current = current.left
                }
                current = stack.pop()
                res.push(current.val)

                current = current.right
            
        }

        return res.join(' -> ')
    }

    // inOrderStack()
}


const bst = new BST()
bst.insert(7)
bst.insert(3)
bst.insert(9)
bst.insert(2)
bst.insert(1)
bst.insert(6)
bst.insert(4)
bst.insert(8)
bst.insert(10)
bst.kthValue(4)

// console.log(JSON.stringify(bst,null,2))
// console.log('---------------------------')
// console.log(bst.findLeftNode())
console.log(bst.InOrder())
console.log(bst.InOrderInStack())
// console.log('Kth Value',bst.findKthValue(4))
// console.log('count of leaf :',bst.countOfLeafNode())
// console.log(bst.BFS())



function isComplete(root) {
    if (!root) return true;

    let queue = [root];
    let seenNull = false;

    while (queue.length) {
        let current = queue.shift();

        if (!current) {
            seenNull = true;
        } else {
            if (seenNull) return false;

            queue.push(current.left);
            queue.push(current.right);
        }
    }

    return true;
}

