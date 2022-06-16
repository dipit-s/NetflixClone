import { useRef, useState } from 'react'
import './register.scss'

export default function Register() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const emailref= useRef();
  const passwordref=useRef();

  const handleFinish= ()=>{
    setPassword(passwordref.current.value);
  };

  const handleStart=()=>{
    setEmail(emailref.current.value);

  };
  return (
    <div className='register'>
      <div className='top'>
        <div className="wrapper">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        <button className='loginButton'>Sign In</button>
        </div>
        </div>
        <div className='container'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch Anywhere. Cancel Anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ?(
            <div className="input">
                <input type="email" placeholder='email address' ref={emailref}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            )
            :
            (
              <form className="input">
                  <input type="password" placeholder='password' ref={passwordref}/>
                  <button className="registerButton" onClick={handleFinish}>Start Membership</button>
              </form>
              )
            }
        </div>
    </div>
  )
}
