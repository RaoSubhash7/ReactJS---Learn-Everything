import { useState } from 'react'
import './App.css'

function App() {
// const [update, setUpdate] = useState(35)
// const [username, setUsername] = useState("Subhash")

// const modifie = () =>{
//   setUpdate(40)
//   setUsername("Usha")
// }


// const [num, setNum] = useState(0)

// const increase = () =>{
// setNum (num+1)
// }

// const decrease = () =>{
// setNum(num-1)
// }

// const jumpfive = () =>{
//   setNum(num+5)
// }



// const [num, setNum] = useState({user:"Subhash" , age:"20"})


// const btnclicked = () =>{
//    const newNum = {...num}
//    newNum.user = 'Usha'
//    newNum.age = "19"
//   setNum(newNum)
// }

const [num, setNum] = useState(10)
 

const btnclicked = () =>{
  setNum(prev => (prev+5))
  setNum(prev => (prev+3))
  setNum(prev => (prev+2))
}

  return (
    <>
    {/* <div>
      <h2>useState in react {update} <br /> user Name {username}</h2>
      <button  className='bg-gray-400 text-white rounded-md p-10 text-6xl' onClick={modifie}>Click Me </button>
    </div> */}

      <div>
      {/* <h2 className="bg-gray-500 mt-10 p-3 w-fit mx-80 text-white">{num}</h2>
      <button onClick={increase} className='m-5 bg-gray-800 text-white mx-28' >Increase</button>
      <button onClick={decrease} className=' bg-gray-800 text-white mx-35 m-5'>Decrease</button>
      <button onClick={jumpfive} className=' bg-gray-800 text-white mx-35 m-5'>jump by 5</button> */}

      {/* <h2> Name - {num.user} <br />  Age - {num.age}</h2> */}
      {/* <button onClick={btnclicked} >Click Me</button> */}
  



      <h2>{num}</h2>
      <button onClick={btnclicked} >Click me</button>
      </div>



    </>
  ) 
}

export default App
