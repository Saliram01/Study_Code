import React, { useContext } from 'react'
import { CounterContex } from '../context/Counter'

function Counter() {
  const cs = useContext(CounterContex);

  function f(){
    if(cs.count > 0){
      cs.setCount(cs.count - 1)
    }
  }
  return (
    <div style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignItems : 'center'}}>
        <div>
            <button onClick={() => cs.setCount(cs.count + 1)} style={{padding : '5px 15px'}}>Increment</button>
            <button onClick={f}  style={{padding : '5px 15px'}}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter