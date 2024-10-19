import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BackArrow from '../pages/BackArrow'

function UseMemo() {
  return (
    <div className='flex flex-col justify-center items-center h-[65vh]'>
        <Link to={'../project'}><BackArrow/></Link>
        <h1 className='font-bold'>useMemo</h1>
        <p>
            useMemo is a react hook that returns a memoized value.('its like catching a value so that it doesn't need to be calculated.'')
        </p>
        <p>
            The useMemo hooks only runs when one of its dependencies gets updated.
            This can improve the performance of the applications.    
        </p>
        <p>
            There is one more hook in react to improvence performance that is useCallback hook.
        </p>
        <ul>
            The useMemo and useCallback hooks are similar. The main difference is :-
            <li>1. useMemo returns a memoized value</li>
            <li>2. useCallback returns a memoized function</li>
        </ul>
    </div>
  )
}

export default UseMemo