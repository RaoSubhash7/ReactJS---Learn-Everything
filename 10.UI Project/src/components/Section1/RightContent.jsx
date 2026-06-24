import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  console.log(props)
  return (
    <>
    <div className='h-full w-2/3 p-5  text-white  flex flex-nowrap gap-5' >
        {props.users.map(function(elem,idx) {
          return<RightCard key={idx} id={idx} img={elem.img } tag={elem.tag}/>
        }
        )}
    </div>
    </>
  )
}

export default RightContent