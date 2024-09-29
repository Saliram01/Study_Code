import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function ServicesDetail() {
  const [apiData , setApiData] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    async function f1(){
      try{
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        data.products.map((items) => {
          if(items.id === Number(id)){
            setApiData(items)
          }
        })
      }
      catch(err){
        console.log(err);
      }
    }
    f1()
  })
 
  return (
    <div className='servicesDetail'>
      <img src={apiData.thumbnail} alt="" />
      <div className="des">
        <h3>Title : {apiData.title}</h3>
        <h3>Category : {apiData.category}</h3>
        <h3>Price : ${apiData.price}</h3>
        <h3>Description : {apiData.description}</h3>
      </div>
    </div>
  )
}

export default ServicesDetail