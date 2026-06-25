import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     //useState- in this state use to manage State throught Hooks.
     //useEFfect- in this state use to side effects handle (like-API call , DOM manipulation , event listener ).
     //useContext- in this state use to manage global data  access without props drilling .
     //useReducer- use to manage complex state a small version of redux.
     //useRef- in this state hold multiple value (No re-render and DOM access)
     //useMemo and useCallback- use to optimization and unnecessary re-render avoid 
    </>
  )
}
export default App
