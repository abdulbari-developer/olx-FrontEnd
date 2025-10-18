import React, { useState } from 'react'
import Categories from './Categories'
import car from '../../assets/img/im.jpg'
import { Link } from 'react-router-dom'
import Chat from './Chat'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, updateProduct } from '../../features/product/productAction'
import Navbar from './Navbar'

const ProductModal = ({product,onClose, isMyProfile}) => {
  const {product:productState,error,loading,message} = useSelector(state => state.product)
  const [isEdit, setisEdit] = useState(false)
  const dispatch = useDispatch()
  const [currentID, setcurrentID] = useState()
  const [data, setdata] = useState({
    title : "",
    price : "",
    description : "",
    category : "",
    productType : "",
  })
    let categories = ["Mobiles", "Vehicles", 'Properties For Sale', 'Properties For Rent', 'Electronics & Home', 'Bikes', "Business & Industrial", 'Services', 'Jobs', 'Animal', 'Furniture & Home Decor', 'Fashion & Beauty', 'Books, Sports & Hobbies', 'Kids']
   let type = ['New', 'Used']
  if (!product) return null;
  const handleUpdate = (e)=>{
        e.preventDefault()
        setdata({
          ...data,
          [e.target.name] : e.target.value,
        })
      
  }
  const handleEdit = (product)=>{
  setdata({
    title : product.title,
    price : product.price,
    description : product.description,
    category : product.category,
    productType : product.productType
  })
  setcurrentID(product._id)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  dispatch(updateProduct({id: currentID,data}))
        setcurrentID(null)
        setisEdit(false)
  }
  const handleClear = ()=>{
setdata({
    title : "",
    price : "",
    description : "",
    category : "",
    productType : "",
})

}
  return (
    <>
    
    <div className='modal'>
      {isEdit && (
  <form onSubmit={handleSubmit} className="form-container">
  {loading && <h1>LOADING.......</h1>}
  {error && <p className="error-message">{message}</p>}
  {message && <p className="success-message">{message}</p>}

  <h1 className="form-title">Edit Product Details</h1>

  <div className="form-row">
    <input type="text" name="title" className="form-input" placeholder="Product Name" onChange={handleUpdate}  value={data.title}/>
    <input type="number" name="price" className="form-input" placeholder="Product Price" onChange={handleUpdate}  value={data.price}/>
    <input type="text" name="description" className="form-input" placeholder="Product description" onChange={handleUpdate} value={data.description} />
  </div>

  <div className="form-row">
    <select name="category" className="form-input" onChange={handleUpdate} value={data.category}>
      <option value="">Select Category</option>
      {categories.map((item, index) => (
        <option value={item} key={index}>{item}</option>
      ))}
    </select>
    <select name='productType' className='form-input' onChange={handleUpdate} value={data.productType}>
              <option value="">Product Type</option>
              {
                type.map((item,index)=>(
                  <option value={item} key={index}>{item}</option>
                ))
              }
            </select>
  </div>

  <div className="form-buttons">
    <button type="submit" className="btn add-btn">Save</button>
    <button type="button" className="btn clear-btn" onClick={handleClear}>Clear</button>
  </div>
</form>

)}
     <div className="modal-container">

      <div className="modal-left">
       <img src={car} alt="" />
      </div>  
      <div className="modal-right">
        <p className='modal-closer' onClick={onClose}>❌</p>
        <h1 className='modal-h1'>{product.title}</h1>
        <p className='modal-price'>Price : {product.price}pkr</p>
        <p className="modal-desc">{product.description}</p>
        <p className="modal-location">{product.productType}</p>
        <p className="modal-time">{product.createdAt}</p>
        {isMyProfile? <>
        <button className="edit-btn" onClick={()=> {setisEdit(true); handleEdit(product);}}>Edit</button>
        <button className="delete-btn" onClick={()=>  dispatch(deleteProduct({id:product._id}))}>Delete</button></>:
        <Link className='modal-btn chat-btn' to='/Chat'>Chat</Link>
        }
        </div>
     </div> 
    </div>
    </>
  )
}

export default ProductModal
