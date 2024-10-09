import React from 'react'
import {Link} from 'react-router-dom'
import BackArrow from '../pages/BackArrow'
function TTT() {
  return (
    <div className='text-center h-[65vh] flex justify-center items-center'>
      <Link to={'../project'}><BackArrow/></Link>
      <h2 className='font-bold'>TTT</h2>
    </div>
  )
}

export default TTT