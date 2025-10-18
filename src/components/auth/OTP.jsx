import React, { useEffect, useState } from 'react'
import { otp } from '../../features/auth/authAction'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OTP = () => {
  const [data, setdata] = useState({})
  const {error, message, user, loading} = useSelector((state)=> state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (e)=>{
 setdata({
  ...data,
  [e.target.name] : e.target.value
 })
  }
 const handleSubmit = async(e)=>{
 e.preventDefault()
 const disp = await dispatch(otp(data))

 }
 useEffect(() => {
 if (user?.status===2) {
  navigate('/Login')
}
 }, [user, navigate])
 
  return (
    <>
    <div className='otp'>
      <div className="card">
        <form onSubmit={handleSubmit}>
             <h1 className='h1 signUp-h1'> OTP Verification</h1>
               {loading && <h1>LOADING.......</h1>}
        {error && <p>{message}</p>}
        {message && <p>{message}</p>}
             <input type="email" name='email' className='input otp-input' placeholder='Enter your email' onChange={handleUpdate}/>
             <input type="number" name='otp'  className='input otp-input' placeholder='Enter your 6 digit OTP' onChange={handleUpdate}/>
             <button className='btn signIn-btn' type='submit'>Verify OTP</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default OTP
