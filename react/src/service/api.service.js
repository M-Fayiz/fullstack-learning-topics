
export async function fetchData() {
    
    try {
         const resonse =await fetch('http://fakeapit/endpoint')
  
        const res = await resonse.json()

        return res
    } catch (error) {
        throw new Error(error)
    }
     

        
}