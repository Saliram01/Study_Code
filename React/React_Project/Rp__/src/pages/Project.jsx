import React from 'react'
import Header from '../head/Header'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <section className='w-full h-screen'>
        <Header/>
        <div className="max-w-screen mx-auto h-[710px] bg-gradient-to-t to-white from-purple-800">
            <h1 className='w-full text-center py-12 text-4xl font-semibold text-green-700 underline'>My Project Lists</h1>
            <div className="max-w-[1320px] mx-auto flex justify-center items-center flex-wrap gap-5 py-8 px-4">

            <Link to={'/bgchanger'}>
            <button className='py-3 hover:text-white transition-all w-[150px] bg-gradient-to-l to-purple-600 from-green-600 rounded-full border-4 border-stone-300 text-fuchsia-200 font-semibold'>Bg Changer</button>
            </Link>

            <Link to={'/enquery'}>
            <button className='py-3 hover:text-white transition-all w-[150px] bg-gradient-to-l to-purple-600 from-green-600 rounded-full border-4 border-stone-300 text-fuchsia-200 font-semibold '>Enquery Form</button>
            </Link>
            
            <Link to={'/sign-up'}>
            <button className='py-3 hover:text-white transition-all w-[150px] bg-gradient-to-l to-purple-600 from-green-600 rounded-full border-4 border-stone-300 text-fuchsia-200 font-semibold '>Sign In Form</button>
            </Link>

            <button className='py-3 hover:text-white transition-all w-[150px] bg-gradient-to-l to-purple-600 from-green-600 rounded-full border-4 border-stone-300 text-fuchsia-200 font-semibold '>?</button>

            </div>
        </div>
    </section>
  )
}
export default Project