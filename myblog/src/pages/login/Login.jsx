import './login.css'
import { Link } from 'react-router-dom'
export default function login() {
  return (
    <div className='login'>
        <span className="loginTitle">login</span>
      <form className="loginForm">
          <label >Email</label>
          <input className = 'loginInput' type="text" placeholder='email' />
          <label >Password</label>
          <input className = 'loginInput' type="password" placeholder='password' />
          <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>
          <Link className = 'link' to='./register'>Register</Link>
      </button>
    </div>
  )
}
