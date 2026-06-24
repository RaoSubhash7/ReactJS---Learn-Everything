import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function PageContant(props) {
  return (
    <>
    <div className='px-18 flex items-center gap-10 py-10 h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
    </>
  )
}

export default PageContant