import React, { useState } from 'react'
import Header from '../components/Header'

function Form() {
let [userData , setUserData] = useState([]);
let [uEnquery , setEnquery] = useState(
  {
    uname : '',
    uemail : '',
    uphone : '',
    umessage : '',
    index : '',
  }
);


let getValue = (event) => {
  let oldData = {...uEnquery}
  let inputName = event.target.name;
  let inputValue = event.target.value;
  oldData[inputName] = inputValue;
  setEnquery(oldData)
}

let handleSubmit = (event) => {
  let currentUserData = {
    uname : uEnquery.uname,
    uemail : uEnquery.uemail,
    uphone : uEnquery.uphone,
    umessage : uEnquery.umessage,
  }

  let oldUserData = [...userData,currentUserData];
  setUserData(oldUserData)

  event.preventDefault();
}

  return (
    <>
      <Header/>
      <div className="w-full sm:w-[80%] sm:ml-[20%] mt-16 h-[91vh]">
          <h2 className='text-center text-fuchsia-800 font-bold py-4 pb-2 text-2xl underline'>Enquery Now</h2> 
          <form onSubmit={handleSubmit} className='max-w-xs sm:max-w-sm space-y-2 w-[80%] mx-auto sm:py-12 sm:px-4 sm:shadow-xl rounded'> 
              <div className="">
                  <label htmlFor="name">Name</label>
                  <input onChange={getValue} className='border py-2 w-full px-2 rounded outline-cyan-600 outline-4' type="text" id='name' name='uname' value={uEnquery.uname} />
              </div>
              <div className="">
                  <label htmlFor="email">Email</label>
                  <input onChange={getValue} className='border py-2 w-full px-2 rounded outline-cyan-600 outline-4' type="email" id='email' name='uemail' value={uEnquery.uemail}/>
              </div>
              <div className="">
                  <label htmlFor="phone">Phone</label>
                  <input onChange={getValue} className='w-full border-2 py-2 px-2 rounded outline-cyan-600 outline-4' type="text" id='phone' name='uphone' value={uEnquery.uphone}/>
              </div>
              <div className="">
                  <label htmlFor="message">Message</label>
                  <textarea onChange={getValue} className='w-full border-2 py-2 px-2 rounded outline-cyan-600 outline-4' name="umessage" id="message"  value={uEnquery.umessage}></textarea>
              </div>
              <button className='py-2 w-full border-2 rounded-md active:bg-green-500 hover:border-2 hover:text-blue-800  bg-green-400 text-white'>
                {uEnquery.index !== '' ? 'Update' : 'Save'}
              </button>
          </form>
      </div>
    </>
  )
}

export default Form