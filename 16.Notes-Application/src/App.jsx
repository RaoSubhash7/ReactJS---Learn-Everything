import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler  = (e) =>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)


    console.log(title)
    console.log(details)

    setTitle('')
    setDetails('')
  }

  return (
    <>
    <div className='h-scree bg-black text-white lg:flex '>
      <form  onSubmit={(e)=>
        {
          submitHandler(e)
        }
      } className='flex flex-col gap-4 p-10 items-start lg:w-1/2'>
         <h1 className='text-3xl font-bold'>Recent Notes</h1>
        
        <input
        type="text" 
        placeholder='Enter Notes  Heading'
        className='px-5 py-2 w-1/2 border-2 rounded outline-none'
        value={title}
        onChange={(e)=>
        {
          setTitle(e.target.value)
        }
        }
        />

        <textarea
        placeholder='Write detail' 
        className='px-5 h-20 w-1/2 py-2 border-2 rounded'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
        />

      <button type='submit' className='bg-white active:scale-95 text-black px-5 py-2 rounded w-1/2'>Add Notes</button>
      </form>

      <div className=' p-10 bg-gray-800 lg:w-1/2 lg:border-l-2 ' >
       <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex flex-wrap gap-4 mt-5 h-full overflow-auto '>
        {task.map(function(elem,idx){
         return <div  key = {idx} className='h-52 w-40 rounded-xl text-black p-4 bg-gray-300' >
          <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
          <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
         </div>
        })}
      </div>
      </div>
      

    </div>
    </>
  )
}

export default App
