class Graph{

    constructor(){
        this.list = new Map()
    }

    addVerte(val){
        if(!this.list.has(val)){
            this.list.set(val,new Set())
        }
    }

    addEdges(a,b){
        
        if(!this.list.has(a)){
            this.addVerte(a)
        }
        if(!this.list.has(b)){
            this.addVerte(b)
        }

        this.list.get(a).add(b)
        this.list.get(b).add(a)
    }

    isCycle(){
        let visited = new Set()

        const dfs=(node,parent)=>{
            visited.add(node)

            for(let next of this.list.get(node)){
                if(!visited.has(next)){
                    if(dfs(next,node)) return true
                }else if(parent!==next) return true
            }
            return false

        }

        for(let elem of this.list.keys()){
            console.log(elem)
            if(!visited.has(elem)){
                if(dfs(elem,null))
                   
                     return true
            }
        }
        return false
    }
    shortest(from , target){
        let queue=[[from]]
        let visit = new Set()

        while(queue.length){
            let path = queue.shift()
            let current = path[path.length-1]

            if(current===target) return path

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
}

const graph = new Graph()
graph.addEdges('A',"B")
graph.addEdges('C',"D")
graph.addEdges('E',"A")
graph.addEdges('C',"E")
graph.addEdges('C',"A")
graph.addEdges('C',"B")
graph.addEdges('D',"B")
graph.addEdges('M',"F")

// console.log(graph.shortest("A","D"))
console.log(graph.list)

// console.log('isCycle :', graph.isCycle())



function cloneGraph(originalGraph){
    const newGraph = new Graph()

    for(let [vertext,negbr] of originalGraph.list){
        console.log("vertex :",vertext," : : ",negbr)
        newGraph.list.set(vertext,new Set(negbr))
    }

    return newGraph
}



const graphTwo = cloneGraph(graph)

graph.addEdges("O","P")
console.log(graph.list)