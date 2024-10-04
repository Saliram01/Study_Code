import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <section className='w-full py-14'>
        <div className='flex justify-center items-center flex-col gap-8'>
        <h2 className='font-bold text-2xl text-slate-400 underline'>React Hooks</h2>
        <ul className='flex justify-center items-center gap-6 flex-wrap py-4'>
            <Link to={'/useState'}>
            <li className='active:border-green-400 border-2 px-8 py-2 rounded-full font-semibold cursor-pointer'>useState</li>
            </Link>
            <Link to={'/useEffect'}>
            <li className='active:border-green-400 border-2 px-8 py-2 rounded-full font-semibold cursor-pointer'>useEffect</li>
            </Link>
            <Link to={'/context'}>
            <li className='active:border-green-400 border-2 px-8 py-2 rounded-full font-semibold cursor-pointer'>useContext</li>
            </Link>
            <Link to={'/useRef'}>
            <li className='active:border-green-400 border-2 px-8 py-2 rounded-full font-semibold cursor-pointer'>useRef</li>
            </Link>
        </ul>
        </div>
        <div className="max-w-screen mx-auto">
            <h1 className='w-full font-serif text-center py-12 text-4xl font-semibold text-green-700 underline px-4'>My Project Lists</h1>
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

            <Link to={'/ttt'}>
            <button className='py-3 hover:text-white transition-all w-[150px] bg-gradient-to-l to-purple-600 from-green-600 rounded-full border-4 border-stone-300 text-fuchsia-200 font-semibold '>Tic Tac Toe</button>
            </Link>

            </div>
        </div>
    </section>
  )
}
export default Project