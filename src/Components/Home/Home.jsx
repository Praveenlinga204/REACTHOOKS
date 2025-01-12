import React, { useState } from 'react'
import Carts from '../State/Carts'
import './Home.css'

function Home() {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const[cartItems,setCartItems] = useState([])

    const addClicktoCart = (e)=>{
       e.preventDefault();
       if(productName && price){
        const NewProduct = {
            id:Date.now(),
            name:productName,
            price:parseFloat(price)
        }
           console.log(NewProduct)
           setCartItems([...cartItems,NewProduct])
           setProductName('')
           setPrice('')
       }
    }
   
    return (
        <div className='container'>
            <h2
            >Add Product</h2>
            <form className='form'>
                <label htmlFor="Product Name">Product Name</label>
                <input type="text" value={productName} onChange={(e)=>{
                    setProductName(e.target.value)
                }}/>
                <label htmlFor="price" >Price</label>
                <input type="number" placeholder='Rs:' value={price} onChange={(e)=>{
                    setPrice(e.target.value)
                }} />
                <button className='btn-submit' type='submit' onClick={addClicktoCart}>Click</button>
            </form>
      <Carts product={cartItems} setproduct={setCartItems}/>
        </div>
    )
}

export default Home
