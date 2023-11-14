import { useCallback, useState, useState } from "react"


const OptimizedWithCb = () => {
    const [count,setCount] = useState(0)
    const increment = useCallback(()=>{     //useCallback Syntax 
        console.log('Artirma islemi gerceklesti :>> ')
        setCount((c)=>c+1)
    })
  return (
    <div>
<p>Count: {count}</p>
<button onClick={increment}>++</button>
    </div>
  )
}

export default OptimizedWithCb