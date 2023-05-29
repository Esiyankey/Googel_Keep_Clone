import {useState} from 'react'
import '../styles/Login.scss'
export const Login = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


  return (
    <div className='Login'>
        <div className="login-container">
         <h3>Sign in</h3>
         <p>Enter your details below. New to Payplux? <a href="#">Sign Up</a></p>
         <form action="">
            <input type="email" placeholder='Email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className='btn'>Log In</button>
         </form>
         <h5> <a href="#">Forgot Password?</a> </h5>
        </div>
    </div>
  )
}
