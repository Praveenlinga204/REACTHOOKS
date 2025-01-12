import React, { useState } from 'react'
import './Cart.css'
import { data } from '../../data/dataset'

function Carts({product,setproduct}) {
  const [ totalNoofProduct,setTotalNoofProduct]= useState(0)
  
  const Deletall=()=>{
    setproduct([])
  }
  const handelDelete = (id)=>{
const updateProduct = product.filter((x)=>x.id !== id)
setproduct(updateProduct);
  }
  if(product.length === 0){
    return <p>Cart is Empty</p>
  }
      return (
         <div className='Cards' >
          <p>Items in Cart:</p>
          {product.map((product)=>{
            return <div className='Card' key={product.id}>
              <p>{product.name}, Rs. {product.price}</p>
              <button className='btn-delete' onClick={()=>{
                handelDelete(product.id)
              }}>Delete</button>
            </div>
          })}
          <button onClick={Deletall}>Delete All</button>
         </div>
        
      )
  }
  
  export default Carts
  

/* function Carts() {
const [ product,setproduct]= useState(data)

const Deletall=()=>{
  setproduct([])
}

    return (
       <div className='Cards' >
        <p>Items in Cart:</p>
        {product.map((product)=>{
          return <div className='Card' key={product.id}>
            <p>{product.name}, Rs. {product.price}</p>
            <button className='btn-delete'>Delete</button>
          </div>
        })}
        <button onClick={Deletall}>Delete All</button>
       </div>
      
    )
}

export default Carts
 */