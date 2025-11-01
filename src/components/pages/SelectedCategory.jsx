import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import product from '../product_list'
import car from '../../assets/img/im.jpg'
import ProductModal from './ProductModal'
import Categories from './Categories'
import Navbar from './Navbar'
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectedProduct } from '../../features/product/productAction'

  import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectedCategory = () => {
  const { categoryName } = useParams()
  const dispatch = useDispatch()
  const { product, error, message, currentPage, totalPages, totalProducts } = useSelector(state => state.product)
  // const categoryProducts = product.filter(item => item.category === categoryName)
  const [selectedProduct, setselectedProduct] = useState(null)
  const limit = 8
  useEffect(() => {
    dispatch(getSelectedProduct({ page: currentPage || 1, limit: limit, category: categoryName }))
  }, [dispatch, categoryName, currentPage, limit])

  const openModal = (products) => setselectedProduct(products)

  const closeModal = () => setselectedProduct(null)
  const handlePageChange = async (e) => {
    e.preventDefault();
    console.log(parseInt(currentPage) + 1, "page")
    await dispatch(getSelectedProduct({ page: parseInt(currentPage) + 1, limit: limit, category: categoryName }))
  }
  const goToPage = async (page) => {
    if (page < 1 || page > totalPages) return;
    await dispatch(getSelectedProduct({ page, limit, category: categoryName }));
  };
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
      <Navbar />
      <Categories />

{error && toast.error({message})}
      <div className='products'>
        <h2 className='products-h2'>{categoryName}</h2>
        <div className="product-container">
          {product?.map((item, index) => (
            <div className="product-card" key={index} onClick={() => openModal(item)}>
              <img src={item.productImage || car} alt="" className="product-img" />
              <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
              <p className="product-title">{item.title}</p>
                           <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
            </div>
          ))}
        </div>
      <div className="pagination-container">
  <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
    Previous
  </button>

  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i + 1}
      onClick={() => goToPage(i + 1)}
      className={currentPage === i + 1 ? 'active' : ''}
    >
      {i + 1}
    </button>
  ))}

  <button onClick={handlePageChange} disabled={currentPage === totalPages}>
    Next
  </button>
</div>

        {selectedProduct && (
          <ProductModal Products={selectedProduct} onClose={closeModal} isMyProfile={false} />
        )}
      </div>

      <Footer />
    </>
  )
};

export default SelectedCategory;
