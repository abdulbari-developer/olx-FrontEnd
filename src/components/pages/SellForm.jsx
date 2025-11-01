import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../features/product/productAction'
import Navbar from './Navbar'
import Footer from './Footer'
  import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SellForm = () => {
  const {loading,product,error,message} = useSelector((state)=> state.product)
  const dispatch = useDispatch()
  const [data, setdata] = useState({ 
    title: '',
    price: '',
    description: '',
    category: '',
    productType: ''
  })
  const [selectedFile, setselectedFile] = useState()
  const [preview, setpreview] = useState()
  const formData = new FormData()
  formData.append('title',data.title)
  formData.append('price',data.price)
  formData.append('description',data.description)
  formData.append('category',data.category)
  formData.append('productType',data.productType)
  formData.append('productImage',selectedFile)
   let categories = ["Mobiles",
  "Vehicles",
  "Properties For Sale",
  "Properties For Rent",
  "Electronics & Home",
  "Bikes",
  "Business & Industrial",
  "Services",
  "Jobs",
  "Animal",
  "Furniture & Home Decor",
  "Fashion & Beauty",
  "Books, Sports & Hobbies",
  "Kids"]
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
  dispatch(addProduct(formData))
}
const handleFile = (e)=> {
e.preventDefault()
 if(!e.target.files || e.target.files.length === 0){
  setselectedFile(undefined)
      return
 }
 if(e.target.files.size > 5000000){
  alert("File size is too large")
      return
 }
 console.log(e.target.files[0],'e.target.file[0]')
 setselectedFile(e.target.files[0])
}

useEffect(() => {
  if (selectedFile) {
    setpreview(URL.createObjectURL(selectedFile))
  }
}, [selectedFile])
 useEffect(() => {
      if (message) {
        if (product?.status === 0) {
          toast.error(message, { theme: 'colored' })
        } else {
          toast.success(message, { theme: 'colored' })
        }
      }
    }, [message])


  return (
    <>
    <Navbar/>
        <div className="signIn sellForm">
        <div className="card">
          <form onSubmit={handleSubmit}>
            {loading && <h1>LOADING.......</h1>}
        {error && toast.error({message})}
        
             <h1 className='h1 signIn-h1'> Add Product Details</h1>
            <input type="text" name='title' className='input signIn-input sell-input' placeholder='Enter your Product Name' onChange={handleUpdate} required/>
            <input type="number" name='price' className='input signIn-input sell-input' placeholder='Enter your Product Price' onChange={handleUpdate} required/>
            <input type="text" name='description' className='input signIn-input sell-input' placeholder='Enter your Product Description' onChange={handleUpdate} required/>
            <input type="file" name='productImage' className='input signIn-input sell-input' placeholder=' Product image' onChange={handleFile} accept='image/*' required/>
            <br />{selectedFile && <><img src={preview} alt="" width={'70px'} height={'70px'} /></>}
            <select name='category' className='input signIn-input sell-input' onChange={handleUpdate} required>
              <option value="">Select Catogary</option>
              {
                categories.map((item,index)=>(
                  <option value={item} key={index}>{item}</option>
                ))
              }
            </select>
            <select name='productType' className='input signIn-input sell-input' onChange={handleUpdate} required>
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
