import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import product from '../product_list'
import car from '../../assets/img/im.jpg'
import ProductModal from './ProductModal'
import Categories from './Categories'
import Navbar from './Navbar'
import Footer from './Footer'


const SelectedCategory = () => {
    const {categoryName} = useParams()
    const categoryProducts = product.filter(item => item.category === categoryName)
    const [selectedProduct, setselectedProduct] = useState(null)
    
        const openModal = (product)=> setselectedProduct(product)
    
        const closeModal = ()=>setselectedProduct(null)
  return (
    <>
<Navbar/>
<Categories/>
       <div className='products'>
      <h2 className='products-h2'>{categoryName}</h2>
      <div className="product-container">
        {categoryProducts.map((item) => (
          <div className="product-card" key={item.id} onClick={()=> openModal(item,false)}>
            <img src={item.img} alt="" className="product-img" />
            <p className="price">
              RS {item.price} <span><i className="fa-regular fa-heart"></i></span>
            </p>
            <p className="product-title">{item.title}</p>
            <p className="location">{item.location}</p>
          </div>
        ))}
      </div>
      {selectedProduct&&(
            <ProductModal product={selectedProduct} onClose={closeModal} isMyProfile={false}/>
            )}
    </div>
    <Footer/>
    </>
)
};

export default SelectedCategory;
