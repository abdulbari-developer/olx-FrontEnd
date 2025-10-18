import React, { useEffect, useState } from 'react'
import car from '../../assets/img/im.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProduct } from '../../features/product/productAction'
import ProductModal from './ProductModal'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const MyProfile = () => {

  const dispatch = useDispatch()
  const { product, loading,error} = useSelector((state) => state.product)
  const [selectedProduct, setselectedProduct] = useState(null)
  useEffect(() => {
    dispatch(getMyProduct())  
  }, [dispatch])


  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
    const openModal = (product)=> setselectedProduct(product)
    const closeModal = ()=>setselectedProduct(null)
    const token = localStorage.getItem('token')
  return (
    <>
    <Navbar/>
    <div className='myprofile sellForm'>
      {/* Header */}
      <div className="profile-header">
        <h1 className='profile-title'>My Profile</h1>
        {token?
        <button className='logout-btn' onClick={handleLogout}>Logout</button>:
        <Link to='/Login'><button className='logout-btn'>Login</button></Link>
        }
        </div>

      <hr className='profile-divider' />

      {/* My Products */}
      <div className="myproducts-section">
        <h2 className='myproducts-title'>My Products</h2>

        <div className="myproducts-container">
          {product.length > 0 ? (
            product.map((item,index) => (
              <div className="product-card" key={index} onClick={()=> openModal(item,true)}>
                <img src={car} alt="product" className='product-img' />
                <p className='price'>
                  RS {item.price}
                  <span><i className="fa-regular fa-heart"></i></span>
                </p>
                <p className="product-title">{item.title}</p>
                <p className="location">{item.productType}</p>
                <p className="time">{item.createdAt}</p>
              </div>
            ))
          ) : (
            <p className='no-products'>You haven’t added any products yet.</p>
          )}
        </div>
      </div>
{ selectedProduct &&     <ProductModal product={selectedProduct} onClose={closeModal} isMyProfile={true}/>
}    </div>
<Footer/>
</>
  )
}

export default MyProfile
