import React from 'react'
import Nav from './Nav'
import PageContant from './PageContant'

function Section1(props) {
console.log(props);

  return (
    <>
    <div className='h-screen w-full'>
      <Nav/>
      <PageContant users={props.users} />
      
    </div>
    
    </>
  )
}

export default Section1