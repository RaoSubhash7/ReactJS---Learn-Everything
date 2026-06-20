import React from 'react'
import RightCard from './RightCard'

function RightContent() {
  return (
    <>
    <div className='h-full w-2/3 p-5  text-white  flex flex-nowrap gap-5' >
        <RightCard/>
         <RightCard/>
          <RightCard/>
    </div>
    </>
  )
}

export default RightContent