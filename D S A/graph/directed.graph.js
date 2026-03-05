class Graph{

    constructor(){
        this.list = new Map()
    }

    addVertex(val){
        if(!this.list.has(val)){
            this.list.set(val,new Set())
        }
    }
    addEdges(a,b){
        if(!this.list.has(a)){
            this.addVertex(a)
        }
        if(!this.list.has(b)){
            this.addVertex(b)
        }
        this.list.get(a).add(b)
    }

    BFS(start){
    let visit = new Set()
    let queue = [start]
    let res = []

    visit.add(start)

    while(queue.length){
        let current = queue.shift()
        res.push(current)

        for(let next of this.list.get(current)){
            if(!visit.has(next)){
                visit.add(next)
                queue.push(next)
            }
        }
    }

    return res.join(' -> ')
}
}

const graph = new Graph()
graph.addEdges('A','B')
graph.addEdges('C','D')
graph.addEdges('C','E')
graph.addEdges('F','E')
graph.addEdges('F','B')

console.log(graph.BFS('C'))
console.log(graph.list)