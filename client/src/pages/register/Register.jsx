import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className='register'>
            <span className='registerTitle'><i className="icon fa-solid fa-puzzle-piece"></i>Register</span>
            <form className='registerForm'>
                <input
                type='text' 
                className='registerInput' 
                placeholder='Desired username'>
                </input>
                <input
                type='text' 
                className='registerInput' 
                placeholder='Email'>
                </input>
                <input 
                type='password' 
                className='registerInput' 
                placeholder='Password'>
                </input>
            </form>
            <div className='buttonContainer'>
                <button className='registerButton'><i className="icon fa-solid fa-user-plus"></i>Complete registration</button>
                <Link className='link' to="/login"><button className='registerLoginButton'>
                <i className="icon fa-solid fa-arrow-right-to-bracket"></i>Login
                </button></Link>
                <button className='registerGuestButton'><i className="icon fa-solid fa-ghost"></i>Login as Guest</button>
            </div>
        </div>
    )
}