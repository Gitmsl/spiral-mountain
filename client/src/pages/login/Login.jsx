import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <span className='loginTitle'><i className="icon fa-solid fa-puzzle-piece"></i>Login</span>
            <form className='loginForm'>
                {/* <label>Email</label> */}
                <input type='text' className='loginInput' placeholder='Email'></input>
                {/* <label>Password</label> */}
                <input type='password' className='loginInput' placeholder='Password'></input>
            </form>
            <div className='buttonContainer'>
                <button className='loginButton'><i className="icon fa-solid fa-arrow-right-to-bracket"></i>Login</button>
                <button className='loginRegisterButton'>
                <Link className='link' to="/register"><i className="icon fa-solid fa-user-plus"></i>Register new account</Link>
                </button>
                <button className='loginGuestButton'><i className="icon fa-solid fa-ghost"></i>Login as Guest</button>
            </div>
        </div>
    )
}