import React from 'react'

function Hooks(props) {
  return (
    <>
      <button className='active:border-green-400 border-2 px-6 py-1 rounded-full font-semibold cursor-pointer'>{props.value}</button>
    </>
  )
}

export default Hooks