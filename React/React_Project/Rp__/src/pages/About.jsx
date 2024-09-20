import React, { useEffect, useState } from 'react'
import Header from '../head/Header'

function About() {
  // useState
  const [update ,setUpdate] = useState({
    brand : 'Ferari',
    color : 'Red',
    model : 'Roma',
    year : '2022',
  });
  function Change(){
    setUpdate((pre) =>{return { ...pre ,color : 'Gray',brand : 'Royal'}})
  }

  // useEffect
const [count , setCount] = useState(0);
const [subCount, setSubCount] = useState(50);

useEffect(() => {
  setTimeout(() => {
    setCount(() => count + 1)
    setSubCount(() => subCount - 1)
  },1000)
},[])
  return (
    <div className="w-full h-screen bg-white">
      <Header/>
      <div className='px-24 py-8'>
        {/* useState */}
        <h1>My {update.brand}</h1>
        <h2 className='mb-4'>It is a {update.color} {update.model} from {update.year}</h2>
        <button onClick={Change} className='py-1 px-4 rounded-full bg-purple-900 text-white active:bg-purple-600'>Click Me</button>

        {/* useEffect */}

        <h1 className='mb-4'>Count : {count}</h1>
        <h1 className='mb-4'>SubCount : {subCount}</h1>

      </div>
    </div>
  )
}

export default About