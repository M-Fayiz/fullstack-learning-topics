class Node{
    constructor(){
        this.child = new Map()
        this.end = false
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let node = this.root

        for(let char of word){
            if(!node.child.has(char)){
                node.child.set(char,new Node())
            }
            node = node.child.get(char)
        }
        node.end=true
    }
    fullWord(){
        let res = []

        function dfs(node,prfx){
            if(node.end){
                res.push(prfx)
            }

            for(let [char,child] of node.child){
                dfs(child,prfx+char)
            }
        }
        dfs(this.root,'')

        return res
    }
    auto(prfx){
        let res =[]
        let node = this.root

        for(let char of prfx){
            node = node.child.get(char)
        }

        function dfs(node,prfx){
            if(node.end){
                res.push(prfx)
            }

            for(let [char,child] of node.child){
                dfs(child,prfx+char)
            }
        }
        dfs(node,prfx)

        return res
    }
    delete(word){

        function remove(node,word,index){

            if(word.length===index){

                if(!node.end){
                    return false
                }

                node.end = false
                node.child.size==0
            }

            const char = word[index]

            if(!node.child.has(char)){
                return false
            }

            let child = node.child.get(char)

            let shouldDeleteChild = remove(child,word,index+1)

            if(shouldDeleteChild){
                node.child.delete(char)
            }
            return node.child.size === 0 && !node.end
        }
    }
}

const trie = new Trie()
trie.insert('Hello')
trie.insert('Help')
trie.insert('Hei')
trie.insert('Happy')

console.log('full word ;',trie.fullWord())

console.log('auto ',trie.auto('He'))