import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import motor from '../../assets/img/iconMotors.png'
import cart from '../../assets/img/online-shopping.png'
import propety from '../../assets/img/property.png'
import chat from '../../assets/svg/iconChat.svg'
import location from '../../assets/svg/iconLocation.svg'
import notification from '../../assets/svg/iconNotifications.svg'
import profile from '../../assets/svg/iconProfile.svg'
import product from '../product_list'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const [products, setproducts] = useState(product)
     const [selectCategary, setselectCategary] = useState('')
  let category = [
    {
      index:1,
      category:"Vehicles"
    },
    
    {
      index:2,
      category:"Properties For Sale"
    },
    
  ]

  let locations = [
    {
      index: location.length+1,
      location: "Hyderabad,Sindh"
    },
    {
      index: location.length+1,
      location: "Karachi,Sindh"
    },
    {
      index: location.length+1,
      location: "Sukkur,Sindh"
    },
    {
      index: location.length+1,
      location: "Lahore,Punjab"
    },
    {
      index: location.length+1,
      location: "Islamabad,punjab"
    },
    {
      index: location.length+1,
      location: "Quetta,Balochistan"
    },
    {
      index: location.length+1,
      location: "Peshawar,Balochistan"
    },
    {
      index: location.length+1,
      location: "Multan,punjab"
    }
  ]
  let navigate = useNavigate()
  const handleClick = (cat)=>{
    setselectCategary(cat)
    navigate(`/Categories/${cat}`)
  }
  const token =localStorage.getItem('token')
  return (
    <>
    <div className='nav'>
      <div className="upper-div">
      <div className="options">
        <div className="logo"><Link to='/'><img src={logo} alt=""  className='nav-img'/></Link></div>
      
        <div className="opt motors" onClick={()=> handleClick(category[0].category)} value={selectCategary}>
        <img src={motor} alt=""  className='nav-img'/>
        <span className='opt-text'>Motors</span>
        </div>
        <div className=" opt property" onClick={()=> handleClick(category[1].category)} value={selectCategary}>
         <img src={propety} alt="" className='nav-img' />
         <span className='opt-text'>Property</span>
        </div>
      </div>
      <div className="right-upper-div">
        <div className="icons">
         <Link to='/Chat'> <img src={chat} alt="" className='icon'/></Link>
          <img src={notification} alt="" className='icon' />
         <Link to='/MyProfile'> <img src={profile} alt="" className='icon pro'/></Link>
          <img src={cart} alt="" className='icon'/>
          {token?
        <Link className='btn-sell' to='/SellForm'> &#43; Sell</Link>:
        <Link className='btn-sell' to='/login'> Login</Link>
          }
          </div>
      </div>
      </div>
      <div className="lower-div">
        <div className="cities">
          <span><img src={location} alt=""/></span>
        <select  id="select">
          {
          locations.map((item,index)=>(
            <option key={index} value="item">{item.location}</option>
          ))
      }
        </select>
        </div>
        <div className="search">
          <input type="text" placeholder='Find Cars, Mobile Phone and More....' className='search-input' />
          <button className='search-btn'><i className="fa fa-search"></i> search</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
