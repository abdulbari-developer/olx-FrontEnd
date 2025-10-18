import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUP } from '../../features/auth/authAction'
import { useNavigate,Link } from 'react-router-dom'

const SignUp = () => {
  const [data, setdata] = useState({})
  const {error,loading,user,message}= useSelector((state)=> state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const updateData = (e)=>{
    setdata({
      ...data,
      [e.target.name]:e.target.value,
    })
  }
  
  const submitData = async (e)=>{
    e.preventDefault()
    const dis = await dispatch(signUP(data))
  }
  useEffect(() => {
  if (user?.status===1) {
    navigate('/OTP')
  }
   
  }, [user,navigate])
  return (
    <>
      <div className="signIn">
        {loading && <h1>LOADING.......</h1>}
        {error && <p>{message}</p>}
        {message && <p>{message}</p>}
        <div className="card">
          <form action="" onSubmit={submitData}>
             <h1 className='h1 signIn-h1'> Sign In</h1>
            <input type="text" name='firstName' className='input signIn-input' placeholder='Enter your First name'  onChange={updateData}/>
            <input type="text" name='lastName' className='input signIn-input' placeholder='Enter your Last name' onChange={updateData}/>
            <input type="number" name='age' className='input signIn-input' placeholder='Enter your Age' onChange={updateData}/>
            <input type="number" name='phone' className='input signIn-input' placeholder='Enter your Phone number' onChange={updateData}/>
            <input type="email"name='email' className='input signIn-input'  placeholder='Enter your Email' onChange={updateData}/>
            <input type="password" name='password' className='input signIn-input' placeholder='Enter your Password' onChange={updateData}/>
            <button className='btn signIn-btn' type='submit'>Sign UP</button>
            <p>Already have an account <Link to='/Login'>go to Sign In</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
