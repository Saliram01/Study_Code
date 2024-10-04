import React, { useEffect, useState} from 'react'
import BackArrow from '../pages/BackArrow'
import { Link } from 'react-router-dom';

function UseEffect() {
    const [count , setCount] = useState(0);

    useEffect(() => {
    console.log(`Count has changed to ${count}`);

    return (() => {
      console.log('Cleanup for the previous count value');
    })
  },[count])

  return (
    <div className='text-center py-48'>
        <Link to={'../project'}><BackArrow/></Link>
      <h1 className='mb-8 underline font-bold'>Hook UseEffect</h1>
      <h2 className='mb-3'>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)} className='border-2 py-1 px-6'>Click Me</button>
    </div>
  )
}

export default UseEffect