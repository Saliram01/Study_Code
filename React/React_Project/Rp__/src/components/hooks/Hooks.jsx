import React from 'react'

function Hooks() {
  return (
    <div className='flex justify-center items-center flex-col gap-8 py-52'>
        <h2 className='font-bold'>React Hooks</h2>
        <ul className='flex justify-center items-center gap-6 flex-wrap'>
            <li className='border-2 px-4 py-1 rounded cursor-pointer'>useState</li>
            <li className='border-2 px-4 py-1 rounded cursor-pointer'>useEffect</li>
            <li className='border-2 px-4 py-1 rounded cursor-pointer'>useContext</li>
            <li className='border-2 px-4 py-1 rounded cursor-pointer'>useRef</li>
        </ul>
    </div>
  )
}

export default Hooks