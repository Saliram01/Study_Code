import React from 'react'
import { Link } from 'react-router-dom'
import BackArrow from '../pages/BackArrow'

function UseContext() {
  return (
    <div className='h-[65vh] text-center'>
      <Link to={'../project'}><BackArrow/></Link>
      <h2>UseContext</h2>
    </div>
  )
}

export default UseContext