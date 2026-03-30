class Graph{
    constructor(){
        this.list = new Map()
    }
    
    addVertex(val){
        if(!this.list.get(val)){
            this.list.set(val,new Set())
        }
    }
    addEdges(v1,v2){
        if(!this.list.get(v1)) {
            this.addVertex(v1)
        }
        if(!this.list.get(v2)){
            this.addVertex(v2)
        }

        this.list.get(v1).add(v2)
        // this.list.get(v2).add(v1)
    }
    removeEdges(v1,v2){
        if(!this.list.get(v1)) return 
        if(!this.list.get(v2)) return 
        this.list.get(v1).delete(v2)
        this.list.get(v2).delete(v1)
    }
    removeVertex(v1){
        if(!this.list.get(v1)) return 
   
        for(let node of this.list.get(v1)){
            this.removeEdges(node,v1)
        }
        this.list.delete(v1)
    }
    isCycle(){
        let visit = new Set()
        const check=(node, parent)=>{
            visit.add(node)

            for(let next of this.list.get(node)){
                if(!visit.has(next)){
                    if(check(next,node)) return true
                }else if(parent!==next){
                    return true
                }
            }
            return false
        }
        for(let key of this.list.keys()){
            if(!visit.has(key)){
                if(check(key)) return true
            }
        }
        return false
    }
    BFS(start){
        let visit = new Set()
        let Q = [start]
        visit.add(start)
        let res = []
        while(Q.length){
            let current = Q.shift()
           
            
            res.push(current)

            for(let next of this.list.get(current)){
                if(!visit.has(next)){
                    Q.push(next)
                    visit.add(next)
                }
            }
        }
        return res.join(' -> ')
    }
    DFS(start){
        let visit = new Set()
        let res = []
        let stack = [start]
        visit.add(start)
        while(stack.length){
            let current = stack.pop()

            res.push(current)

            for(let next of this.list.get(current)){
                if(!visit.has(next)){
                    visit.add(next)
                    stack.push(next)
                }
            }
        }
        return res.join(' -> ')
    }
    shortest(from , target){
        let queue=[[from]]
        let visit = new Set()

        while(queue.length){
            let path = queue.shift()
            let current = path[path.length-1]

            if(current===target) return path.join(' > ')

            if(!visit.has(current)){
                visit.add(current)
            }

            for(let next of this.list.get(current)){
                let newPath = [...path,next]
                queue.push(newPath)
            }
        }
        return false
    }
    recursiveDFS(from){
        let res =[]
        let visit = new Set()
        visit.add(from)
        const  dfs=(node)=>{
           visit.add(node)
           
            res.push(node)

            for(let next of this.list.get(node)){
                if(!visit.has(next)){
                    
                    dfs(next)
                }
            }
        }
        dfs(from)
        return res.join(' -> ')
    }
}

const graph = new Graph()

graph.addEdges("A","D")
graph.addEdges("B","C")
graph.addEdges("D","B")
graph.addEdges("F","A")
graph.addEdges("A","M")
graph.addEdges("C","F")
graph.addEdges("D","H")
graph.addEdges("M","H")
// graph.removeEdges("A","D")
// graph.removeVertex("A")

console.log('isCycle :',graph.isCycle())

console.log(graph.list)
console.log('----------------------------------')
console.log('BFS :',graph.BFS("A"))
console.log('DFS       :',graph.DFS("A"))
console.log('recursion :',graph.recursiveDFS("A"))
console.log('----------------------------------')
console.log('shorted path :',graph.shortest("A","M") )