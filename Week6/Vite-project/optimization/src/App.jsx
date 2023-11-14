import OptimizedWithUseMemo from './components/OptimizedWithUseMemo'
import UnOptimizedWithUseMemo from './components/UnOptimizedWithUseMemo'
//import Square from './components/SquareMemo'


const App = () => {
  return (
    <div>
   {/* <Square /> */}
   <OptimizedWithUseMemo/>
   <UnOptimizedWithUseMemo />
    </div>
  )
}

export default App
