import './register.css';
import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import axios from 'axios';

export default function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);
    
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try{
			const res = await axios.post('/auth/register', {
				username,
				email,
				password,
			});
			res.data && window.location.replace('https://www.spiral-mountain.com/login');
		} catch (err) {
			setError(true);
		}
	};
	return (
		<div className='register'>
			<span className='registerTitle'><i className="icon fa-solid fa-puzzle-piece"></i>Register</span>
			<form className='registerForm' onSubmit={handleSubmit}>
				<input
					type='text' 
					className='registerInput' 
					placeholder='Desired username'
					onChange = {e => setUsername(e.target.value)}
				/>
				<input
					type='text' 
					className='registerInput' 
					placeholder='Email'
					onChange = {e => setEmail(e.target.value)}
				/>
				<input 
					type='password' 
					className='registerInput' 
					placeholder='Password'
					onChange = {e => setPassword(e.target.value)}
				/>
				<button className='registerButton' type='submit'>
					<i className="icon fa-solid fa-user-plus"></i>
                        Complete registration
				</button>
				{error && <div className='registerErrorMessage'>Something went wrong, try again</div>}
			</form>
			<div className='buttonContainer'>
				<Link className='link' to="/login">
					<button className='registerLoginButton'>
						<i className="icon fa-solid fa-arrow-right-to-bracket"></i>
                        Login
					</button>
				</Link>
			</div>
		</div>
	);
}