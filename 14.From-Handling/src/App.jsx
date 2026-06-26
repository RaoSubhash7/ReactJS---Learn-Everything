import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log('form Submited')
  }
  return (
  <>
  <div>
    <form onSubmit={(e)=>{
      SubmitHandler(e) 
    }}>
      <input className='outline-2 outline-offset-2 ... m-5' type="text" placeholder='Enter Your Name' />
      <button className='outline-2 outline-offset-2 ... m-5' >Submit</button>
    </form>
  </div>
  </>
  )
}

export default App
