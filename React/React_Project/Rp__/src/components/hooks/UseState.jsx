import React, { useState } from 'react'
import BackArrow from '../pages/BackArrow';
import { Link } from 'react-router-dom';

function UseState() {
    const [count , setCount] = useState(0);

  return (
    <div className='flex justify-center items-center flex-col h-[65vh] gap-4'>
        <Link to={'../project'}><BackArrow/></Link>
        <div>Render count {count} times</div>
        <button className='px-8 py-2 border-2' onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default UseState