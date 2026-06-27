import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const submitHandler  = (e) =>{
    e.preventDefault()
    console.log("From was Submited")
  }


  return (
    <>
    <div className='h-scree bg-black text-white'>
      <form  onClick={(e)=>
        {
          submitHandler(e)
        }
      } className='flex flex-col gap-4 p-10 items-start'>
        <input
        type="text" 
        placeholder='Enter Notes  Heading'
        className='px-5 py-2 w-1/2 border-2 rounded outline-none'
        />
        <textarea
        type="text"
        placeholder='Write detail' 
        className='px-5 h-20 w-1/2 py-2 border-2 rounded'/>
        <button className='bg-white  text-black px-5 py-2 rounded w-1/2'>Add Notes</button>
      </form>
      <div className='flex flex-wrap p-10' >
        <div className='h-32 w-32 rounded-2xl bg-white'></div>
      </div>
    </div>
    </>
  )
}

export default App
