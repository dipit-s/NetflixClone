import './login.scss'

export default function Login() {
  return (
    <div className='login'>
      <div className='top'>
        <div className="wrapper">
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </div>
        </div>
        <div className='container'>
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder='Email or phone number' />
              <input type="password" placeholder='password'/>
              <button className="loginButton">Sign In</button>
              <span>New to Netflix? <b>Sign up Now</b></span>
            </form>
        </div>
    </div>
  )
}
