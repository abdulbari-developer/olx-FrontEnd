import React from 'react'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import OTP from './components/auth/OTP'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectedCategory from './components/pages/SelectedCategory'
import SellForm from './components/pages/SellForm'
import Chat from './components/pages/Chat'
import MyProfile from './components/pages/MyProfile'
import Home from './components/pages/Home'
import { ProtectedRoutes } from './components/auth/ProtectedRoutes'

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-body">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/OTP' element={<OTP />} />
          <Route path='/Login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/category/:categoryName' element={<SelectedCategory />} />
          <Route path='/MyProfile' element={ 
            <ProtectedRoutes>
            <MyProfile />
            </ProtectedRoutes>} />
       
            <Route path='/SellForm' element={
              <ProtectedRoutes>
              <SellForm />
            </ProtectedRoutes> } />

            <Route path='/Chat' element={
              <ProtectedRoutes>
              <Chat />
            </ProtectedRoutes>} />
      
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
