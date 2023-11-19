import { useState } from "react"


const UnOptimizedWithUseMemo = () => {
    const [count,setCount] = useState(0)
    const handleClick = () =>{
        setCount((prev)=>prev+1)
    }

    const calcsum = ()=>{
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
           sum += i
        }
        return sum
    }
    
    return (
        <div>
          <h2>UnOptimizedWithUseMemo</h2>
          <p>Count: {count}</p>
          <button onClick={handleClick}>Increment Count</button>
          <p>Sum: {calcsum()}</p>
        </div>
  )
}

export default UnOptimizedWithUseMemo

