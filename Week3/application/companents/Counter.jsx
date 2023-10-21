import React, { useState } from 'react'

const Counter = ({initialCount,minCount,maxCount}) => {
    const [count,setCount]=useState(initialCount);

    const increment = () =>{
        setCount(count+1);
    };

    const decrement = ()=>{
        setCount(count+1);
    }

    count decrement=()=>{
        setCount(count-1);
    }



  return (
    <div>
    <>Count:{count}</>
      <button>onClick: {increment}>Increment</button>
      <button>onClick: {decrement}>decrement</button>
    </div>
  )
}

export default Counter
