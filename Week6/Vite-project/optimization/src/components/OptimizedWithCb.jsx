import { useCallback, useState } from "react"

const OptimizedWithCb = () => {
    const [count,setCount] = useState(0)
    const increment = useCallback(()=>{     //useCallback Syntax 
        console.log('Artirma islemi gerceklesti :>> ')
        setCount((c)=>c+1)
    },[count])
    
  return (
    <div>
<p>Count: {count}</p>
<button onClick={increment}>Arttir</button>
    </div>
  )
}
export default OptimizedWithCb