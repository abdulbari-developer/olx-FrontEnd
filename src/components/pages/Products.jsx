import React, { useEffect, useState } from 'react'
import car from '../../assets/img/im.jpg'
import {getProduct} from '../../features/product/productAction'
import BoxexCategory from './BoxexCategory'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import ProductModal from './ProductModal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
    
    const {product,error,loading,message} = useSelector((state)=> state.product)
    const dispatch = useDispatch()
 
    // const [products, setproducts] = useState(product)
    const [selectedProduct, setselectedProduct] = useState(null)
    const openModal = (product)=> setselectedProduct(product)

    const closeModal = ()=>setselectedProduct(null)
    useEffect(() => {
        dispatch(getProduct())
    },[dispatch])
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
            <div className='products'>
                {loading && <h1>LOADING.......</h1>}
        {error && toast.error({message})}
                <h2 className='products-h2'>Mobiles</h2>
                <div className="product-container">
        {product.filter(item => item.category === 'Mobiles').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car } alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                            <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Cars</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Vehicles').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                            <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Houses</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Properties For Sale').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                            <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Bikes & Motorcycles</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Bikes').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                           <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Electronics & Home Appliances</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Electronics & Home').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                           <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Furniture & Home Decorations</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Furniture & Home Decor').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'> <span className='price p-price'>RS {item.price}</span> <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                           <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Kids</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Kids').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                          <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
                <h2 className='products-h2'>Jobs</h2>
                <div className="product-container">
                    {product.filter(item => item.category === 'Jobs').slice(0, 4).map((item, index) => (
                        <div className="product-card" key={index} onClick={()=> openModal(item,false)}>
                            <img src={item.productImage? item.productImage:car} alt="" className='product-img' />
                            <p className='price'><span className='price p-price'>RS {item.price}</span>  <span><i className="fa-regular fa-heart"></i></span></p>
                            <p className="product-title">{item.title}</p>
                           <p className="location">{item.productType}</p>
                            <p className="time">{item.createdAt}</p>
                        </div>))} </div>
            </div>
                        <Footer/>
            {selectedProduct &&(
            <ProductModal Products={selectedProduct} onClose={closeModal} isMyProfile={false}/>
            )}</>
    )

}

export default Products
