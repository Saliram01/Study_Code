import React from 'react'

function Hooks(props) {
  return (
    <>
      <button className='active:bg-green-300 border-2 px-6 py-1 rounded-full font-semibold cursor-pointer hover:bg-green-400 hover:text-white'>{props.value}</button>
    </>
  )
}

export default Hooks