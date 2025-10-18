import React from 'react'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import OTP from './components/auth/OTP'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/pages/Navbar'
import Categories from './components/pages/Categories'
import Products from './components/pages/Products'
import SelectedCategory from './components/pages/SelectedCategory'
import SellForm from './components/pages/SellForm'
import Chat from './components/pages/Chat'
import MyProfile from './components/pages/MyProfile'
import Home from './components/pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <div className="main-body">
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/OTP' element={<OTP/>}/>
    <Route path='/Login' element={<SignIn/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/Categories/:categoryName' element={<SelectedCategory/>}/>
    <Route path='/SellForm' element={<SellForm/>}/>
    <Route path='/Chat' element={<Chat/>}/>
    <Route path='/MyProfile' element={<MyProfile/>}/>
   </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
