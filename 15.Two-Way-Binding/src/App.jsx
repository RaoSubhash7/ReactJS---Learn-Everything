import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('')

  const SubmitHandler = (e) =>{
    e.preventDefault()
    console.log('form Submited by ', title);
    setTitle('')
  }
  return (
  <>
  <div>
    <form onSubmit={(e)=>{
      SubmitHandler(e) 
    }}>
      <input
      value={title}
       onChange={(e)=>{
        setTitle(e.target.value )
      }} className='outline-2 outline-offset-2 ... m-5' type="text" placeholder='Enter Your Name' />
      <button className='outline-2 outline-offset-2 ... m-5' >Submit</button>
    </form>
  </div>
  </>
  )
}

export default App
 