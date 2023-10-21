import React from 'react'
import Counter from '../companents/Counter'

const App = () => {
  return (
    <div>
      App
      <Counter initialCount{10} minCount={-1} maxCount={10}></Counter>
    </div>
  )
}

export default App
