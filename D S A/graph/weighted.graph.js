class Graph{
    constructor(){
        this.list = new Map()
    }

    addVertex(val){
        if(!this.list.has(val)){
            this.list.set(val , [])
        }
    }
    addEdges(a, b,dist){
        if(!this.list.has(a)){
          this.addVertex(a)
        }
        if(!this.list.has(b)){
          this.addVertex(b)
        }
        this.list.get(a).push({w:dist,n:b})
        this.list.get(b).push({w:dist,n:a})
    }
    BFS(start){
        let queue = [start]
        let visit = new Set()
        let res =[]
        visit.add(start)
        while(queue.length){
            let current = queue.shift()
            res.push(current)

            for(let next of this.list.get(current)){
                if(!visit.has(next.n)){
                    visit.add(next.n)
                    queue.push(next.n)
                }
            }
        }
        return res.join(' -> ')
    }
    Dijistra(start, target){
       const distance = {}
       const previouse = {}
       const visited = new Set()

       for(let key of this.list.keys()){
        distance[key] = Infinity
        previouse[key] = null;
       }

       distance[start]=0
       
       while(true){
        let current = null

            for(let vertex in distance){
                if (!visited.has(vertex)) {
                    if (current === null || distance[vertex] < distance[current]) {
                        current = vertex;
                    }
                }
            }

            if(current == null) break
            if(current === target) break

            visited.add(current)

            for(let negbr of this.list.get(current)){
               let newDist  = distance[current]+negbr.w

                if(newDist<distance[negbr.n]){
                    distance[negbr.n] = newDist
                    previouse[negbr.n] = current
                }
            }

       }

       console.log('distance :',distance)
       console.log('previouse :',previouse);

       const path = []
       let temp = target

       while(temp){
        path.push(temp)
        temp = previouse[temp] 
       }
       path.reverse()

       console.log('distance :',distance[target])
       console.log('path :',path)
       
    }
    isCycle(){
        let visit = new Set()


        const dfs = (node , parent)=>{
     
            visit.add(node)

            for(let next of this.list.get(node)){
            
                if(!visit.has(next.n)){
                    if(dfs(next.n,node)) return true

                }else if(next.n!==parent) return true

            }
            return false
        }

        for (let node of this.list.keys()){
            if(!visit.has(node)){
              
                if(dfs(node)) return true
            }
        }

        return false
    }
}

const graph = new Graph()
graph.addEdges('A',"B",1)
graph.addEdges('C',"F",5)
graph.addEdges('D',"B",7)
graph.addEdges('C',"A",2)
graph.addEdges('F',"D",4)
// graph.addEdges('A',"F",8)
// console.log('isCycle: ',graph.isCycle())
console.log('List : ',graph.list)
console.log(graph.Dijistra('A','D'))

