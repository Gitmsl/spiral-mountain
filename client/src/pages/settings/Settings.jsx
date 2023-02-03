import './settings.css';
import React from 'react';

export default function Settings() {
	return (
		<div className='Settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>Update your Account</span>
					<span className='settingsDeleteTitle'>Delete your Account</span>
				</div>
				<form className='settingsForm'>
					<label>Profile Picture</label>
					<div className='settingsProfPic'>
						<img 
							src='https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
							alt=''
						/>
						<label htmlFor='fileInput'>
							<i className="settingsProfPicIcon fa-solid fa-user"></i>
						</label>
						<input type='file' id='fileInput' style={{display:'none'}}></input>
					</div>
					<label>Username</label>
					<input type='text' placeholder='User'></input>
					<label>Email</label>
					<input type='email' placeholder='User@gmail.com'></input>
					<label>Password</label>
					<input type='password'></input>
					<button className='settingsSubmit'>Update</button>
				</form>
			</div>
		</div>
	);
}