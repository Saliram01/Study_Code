import React, { createContext, useState } from 'react'

const CounterContex = createContext(null);

function CounterProvider(props) {
    const [count , setCount] = useState(0);
    
    return(
        <CounterContex.Provider value={{count,setCount}}>
            {props.children}
        </CounterContex.Provider>
    )
}

export {CounterProvider, CounterContex};