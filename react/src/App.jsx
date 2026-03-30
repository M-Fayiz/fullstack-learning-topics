import { useEffect } from "react"
import { useState } from "react"
import { fetchData } from "./service/api.service"

function App() {

  const [data,setData]=useState([])

  useEffect(()=>{
    (async()=>{
      const resonse =fetchData()
      
      setData(resonse)
       

    })()
  },[])
 
  return (
    <>
      
      <div>
        {data&&data.map((d,i)=>(
          <h1 key={i}>{d}</h1>
        ))}
      </div>
    </>
  )
}

export default App
