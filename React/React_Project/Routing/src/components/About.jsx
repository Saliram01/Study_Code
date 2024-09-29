import React, { useState } from 'react'

function About() {
  const [value , setValue] = useState(0);

  return (
    <div className='about' style={{display : 'flex', flexDirection : 'column'}}>
        <p style={{color : 'white', fontSize : '20px',marginBottom : '30px'}}>{value}</p>
        <span style={{marginBottom : '30px', color : 'white'}}>{value % 2 === 0 ? 'Even' : 'Odd'}</span>
        <div style={{display : 'flex' , gap : '10px'}}>
            <button onClick={() => setValue(value - 1)}>Decrease</button>
            <button onClick={() => setValue(value + 1)}>Increase</button>
        </div>
    </div>
  )
}

export default About