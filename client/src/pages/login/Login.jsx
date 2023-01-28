import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';
import './login.css'

export default function Login() {
    
    const userReference = useRef();
    const passwordReference = useRef();
    const { dispatch, isFetching} = useContext(Context);


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"login_start"});
        try{
            const res = await axios.post("/auth/login", {
                username: userReference.current.value,
                password: passwordReference.current.value,
            })
            dispatch({type:"login_success", payload:res.data });
        } catch (err) {
            dispatch({type:"login_failure"});
        }
    };

    return (
        <div className='login'>
            <span className='loginTitle'><i className="icon fa-solid fa-puzzle-piece"></i>Login</span>
            <form className='loginForm' onSubmit={handleSubmit}>
                {/* <label>Email</label> */}
                <input
                    type='text' 
                    className='loginInput' 
                    placeholder='Username'
                    ref={userReference}
                />
                {/* <label>Password</label> */}
                <input
                    type='password' 
                    className='loginInput' 
                    placeholder='Password'
                    ref={passwordReference}
                />
                <button 
                    className='loginButton' 
                    type='submit'
                    disabled={isFetching}>
                        <i className="icon fa-solid fa-arrow-right-to-bracket"></i>
                    Login
                </button>
            </form>
            <div className='buttonContainer'>
                <button className='loginRegisterButton'>
                <Link className='link' to="/register"><i className="icon fa-solid fa-user-plus"></i>Register new account</Link>
                </button>
                <button className='loginGuestButton'><i className="icon fa-solid fa-ghost"></i>Login as Guest</button>
            </div>
        </div>
    )
}