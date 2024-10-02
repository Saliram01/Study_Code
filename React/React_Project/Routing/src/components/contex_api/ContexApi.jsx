import React, { useContext} from 'react'
import Counter from './Count';
import {CounterContex} from '../context/Counter'

function ContexApi(){
    const counterState = useContext(CounterContex);
  
    return(
        <div style={{padding : '150px 0'}}>
        <h2 style={{textAlign : 'center', margin : '20px 0',color : 'white',}}>
            Counter is {counterState.count}</h2>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        </div>
    )
}

export default ContexApi;