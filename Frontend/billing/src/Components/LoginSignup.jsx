import React,{useState} from 'react'
import './LoginSignup.css'

import email from '../Components/Assets/email.png'
import password from '../Components/Assets/password.png'
import person from '../Components/Assets/person.png'

const LoginSignup = () => {
    const [action,setAction]=useState('SignUp')

  return (
    <div className="outer-container">
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={person} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
                <img src={email} alt="" />
                <input type="email" placeholder='email'/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Password'/>
                
            </div>
        </div>
        <div className="submit-container">
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("SignUp")}}>Sign Up</div>
            <div className={action==="SignUp"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>Login</div>
        </div>
    </div>
    </div>
  )
}

export default LoginSignup
