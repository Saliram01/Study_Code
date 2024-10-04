import React from 'react'
import BackArrow from '../pages/BackArrow'
import { Link } from 'react-router-dom'

function UseRef() {
  return (
    <div className='h-[65vh] text-center'>
        <Link to={'../project'}><BackArrow/></Link>
        <h1>UseRef</h1>
    </div>
  )
}

export default UseRef