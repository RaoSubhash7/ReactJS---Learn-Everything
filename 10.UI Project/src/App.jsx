import { useState } from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

function App() {
 const users =[
  {
    img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D", 
    intro:"", 
    tag:"satisfied",
  },
  {
    img:"https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D", 
    intro:"", 
    tag:"Uderservide",
  },
  {
    img:"https://images.unsplash.com/photo-1684327596702-6bbbe1422375?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8", 
    intro:"", 
    tag:"Underbanked",
  },
    {
    img:"https://images.unsplash.com/photo-1684327596702-6bbbe1422375?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8", 
    intro:"", 
    tag:"Underbanked",
  }
 ]

  return (
  <>
 <Section1 users={users}/>
 <Section2/>
  </>
  )
}

export default App
