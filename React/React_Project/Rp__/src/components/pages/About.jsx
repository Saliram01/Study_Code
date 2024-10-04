import React from 'react'
import useFetch from '../useFetch'

function About() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');
  
  return (
    <div className='max-w-full h-auto'>
      <div className="px-28 py-4 flex flex-wrap gap-4">
        {
          data.map((el) => <div key={el.id}>
          <p className='border-2 pr-2'><span className='font-bold text-purple-400 border-r-2 px-1'>{el.id}</span> {el.title}</p>
          </div> )
        }
      </div>
    </div>
  )
}

export default About