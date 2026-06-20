import React from 'react'
import Hero from './Hero'
import Arrow from './Arrow'
function LeftContent() {
    return (
        <>
        <div className=' p-6 h-full w-1/3  text-black flex flex-col justify-between'>
        <Hero/>
        <Arrow/>
        </div>
      
        </>

    )
}

export default LeftContent