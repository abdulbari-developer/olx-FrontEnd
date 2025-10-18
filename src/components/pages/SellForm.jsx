import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../features/product/productAction'
import Navbar from './Navbar'
import Footer from './Footer'

const SellForm = () => {
  const [data, setdata] = useState({ 
    title: '',
    price: '',
    description: '',
    category: '',
    productType: ''
  })
  const dispatch = useDispatch()
  const {loading,product,error,message} = useSelector((state)=> state.product)
   let categories = ["Mobiles", "Vehicles", 'Properties For Sale', 'Properties For Rent', 'Electronics & Home', 'Bikes', "Business & Industrial", 'Services', 'Jobs', 'Animal', 'Furniture & Home Decor', 'Fashion & Beauty', 'Books, Sports & Hobbies', 'Kids']
   let type = ['New', 'Used']

const handleUpdate = (e)=>{
  e.preventDefault()
  setdata({
    ...data,
    [e.target.name] : e.target.value
  })
}
const handleSubmit = (e)=>{
  e.preventDefault()
  dispatch(addProduct(data))
}


  return (
    <>
    <Navbar/>
        <div className="signIn sellForm">
        <div className="card">
          <form onSubmit={handleSubmit}>
            {loading && <h1>LOADING.......</h1>}
        {error && <p>{message}</p>}
        {message && <p>{message}</p>}
             <h1 className='h1 signIn-h1'> Add Product Details</h1>
            <input type="text" name='title' className='input signIn-input sell-input' placeholder='Enter your Product Name' onChange={handleUpdate}/>
            <input type="number" name='price' className='input signIn-input sell-input' placeholder='Enter your Product Price' onChange={handleUpdate}/>
            <input type="text" name='description' className='input signIn-input sell-input' placeholder='Enter your Product Description' onChange={handleUpdate}/>
            <select name='category' className='input signIn-input sell-input' onChange={handleUpdate}>
              <option value="">Select Catogary</option>
              {
                categories.map((item,index)=>(
                  <option value={item} key={index}>{item}</option>
                ))
              }
            </select>
            <select name='productType' className='input signIn-input sell-input' onChange={handleUpdate}>
              <option value="">Product Type</option>
              {
                type.map((item,index)=>(
                  <option value={item} key={index}>{item}</option>
                ))
              }
            </select>
            <button className='btn signIn-btn' type='submit'>Add Product</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SellForm
