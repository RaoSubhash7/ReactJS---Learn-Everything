// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  // function btnClicked () {
  //   console.log("Button cliked Bro")
  // }

  // function MouseEnter () {
  //   console.log("MouseEnter Bro")
  // }

function usertype (){
  console.log('user in typing')
}
  return (
   <>
   {/* <button onClick={btnClicked}>Click Me </button>
      <button onMouseEnter={MouseEnter}>Click Me </button> */}

      <input onChange={usertype} type="text" placeholder='Enter Name' />
   </>
  )
}

export default App
