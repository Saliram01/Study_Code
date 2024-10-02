import React, { useEffect, useState } from 'react'

function UIData() {
    const [data , setData] = useState([]);

    useEffect(() => {
        async function api() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const dataa = await res.json();
            setData(dataa)
        }
        api();
    })
  
  return (
    <div>
        {
            data ? data.map((e) => {
                return(
                    <div key={e.id} style={{padding : '10px 20px',color : 'white',}}>
                        <h3>{e.id}. {e.title}</h3>
                        <p>{e.body}</p>
                    </div>
                )
            }) : <p>No Data</p>
        }
    </div>
  )
}

export default UIData