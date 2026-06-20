import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard() {
  return (
    <>
    <div className='h-full w-80 overflow-hidden relative bg-red-600 rounded-4xl'>
        <img  className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661663133363-d37b59bd1078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="" />
       <RightCardContent/>
    </div>
    </>
  ) 
}

export default RightCard