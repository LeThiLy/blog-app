import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className='loginInput' placeholder='Enter your email ...' />
        <label>Password</label>
        <input type="password" className='loginInput' placeholder='Enter your passwords ...' />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginButtonRegister">
        <Link to="/register" className='link'>Register</Link>
      </button>
    </div>
  )
}
