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

console.log(graph.list)

function cloneGraph(graph){
    let clonedList = new Map()

    for(let [vertext,edges] of graph){
        console.log('ve',vertext,'ed',edges)
        clonedList.set(vertext,new Set(edges))
    }

    return clonedList
}

// const newGraph=cloneGraph(graph.list)
// console.log(newGraph)

function cloneGraphWithDFS(graph){
    let mapCloned = new Map()
    let visited = new Set()

    function dfs(node){
        
        if(!visited.has(node)){
            visited.add(node)
        }
        if(!mapCloned.has(node)){
            mapCloned.set(node,new Set())
        }

        for(let next of graph.get(node)){
            mapCloned.get(node).add(next)
            if(!visited.has(next)){
                dfs(next)
            }
        }

    }


    for(let keys of graph.keys()){
        if(!visited.has(keys)){
            dfs(keys)
        }
    }

    return mapCloned
}


const newClonedGraph = cloneGraphWithDFS(graph.list)

console.log(newClonedGraph)