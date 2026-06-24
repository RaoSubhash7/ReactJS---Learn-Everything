import React from 'react'
import {MoveRight} from 'lucide-react'
function RightCardContent(props) {
  return (
     <div className='absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between'>
          <h2 className='bg-white rounded-full text-black text-xl font-semibold h-12 w-12 flex justify-center items-center mb-10 text-center'>{props.id+1}</h2>
          <div>
            <p className='text-xl text-white mb-14 leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi nesciunt nihil omnis dolorem eum praesentium.             
            </p>
            <div className='flex justify-between'>
              <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
              <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full '><MoveRight/></button>
            </div>
          </div>     
        </div>
  )
}

export default RightCardContent