import React, { useEffect, useState } from 'react'
import car from '../../assets/img/im.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { getMyProduct } from '../../features/product/productAction'
import ProductModal from './ProductModal'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const MyProfile = () => {

  const dispatch = useDispatch()
  const { product, loading,error,message} = useSelector((state) => state.product)
  const [selectedProduct, setselectedProduct] = useState(null)
  const [refresh, setrefresh] = useState(false)
  useEffect(() => {
    dispatch(getMyProduct())  
  }, [dispatch,refresh])


  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }
    const openModal = (product)=> setselectedProduct(product)
    const closeModal = ()=>setselectedProduct(null)
    const token = localStorage.getItem('token')
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
    <div className='myprofile sellForm'>
      {/* Header */}
      <div className="profile-header">
    {loading && <h1>LOADING.......</h1>}
            {error && toast.error({message})}
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
                <img src={item.productImage? item.productImage:car} alt="product" className='product-img' />
                <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
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
{ selectedProduct &&     <ProductModal Products={selectedProduct} onClose={closeModal} isMyProfile={true} onUpdate={()=> setrefresh(prev => !prev)}/>
}    </div>
<Footer/>
</>
  )
}

export default MyProfile
