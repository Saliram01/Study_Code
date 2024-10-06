import React, { useState } from 'react'
import BackArrow from '../pages/BackArrow';
import { Link } from 'react-router-dom';

function UseState() {
    const [count , setCount] = useState(0);

  return (
    <div className='flex justify-center items-center flex-col h-[65vh] gap-4'>
        <p>
          useState is a react hook which creates  an 'state variable'.
          Which helps us to tract state in components  and updates the user interface when state changes.
        </p>
        <Link to={'../project'}><BackArrow/></Link>
        <div>Render count {count} times</div>
        <button className='px-8 py-2 border-2' onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default UseState