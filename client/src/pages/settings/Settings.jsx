import './settings.css';
import { React, useContext, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {
	const [file, setFile] = useState(null);
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [success, setSuccess] = useState(false);
	const PUBLICFOLDER = 'https://www.spiral-mountain.com/images/';
	
	const {user, dispatch} = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({type:'update_start'});
		const updatedUser = {
			userId: user._id,
			username, 
			email, 
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append('name', filename);
			data.append('file', file);
			updatedUser.profilePic = filename;
			try{
				await axios.post('/upload', data);
			}catch(err) {
				console.log('an error has occurred');
			}
		}
		try{
			const res = await axios.put('/users/' + user._id, updatedUser );
			await axios.put(`/posts/${user._id}`, {
				username: updatedUser.username
			});
			// add line that adds await axios.put ('/posts/'), updates posts tied to user
			//with updated username?
			//above should retroactively update usernames of previous posts
			dispatch({type:'update_success', payload: res.data});
			setSuccess(true);
		} catch (err){
			console.log('error, second try block');
			dispatch({type:'update_failure'});
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		dispatch({type:'delete_user_start'});
		try{
			await axios.delete('/users/' + `${user._id}`, {
				method: 'DELETE',
			});
			dispatch({type:'delete_user_success'});
			alert('User successfully deleted!');
			// window.location.replace('/'); //maybe? or new page for user delete success?
			// return(
			// 	<div><h2>Account and all associated posts successfully deleted.</h2></div>
			// );
		}catch (err) {
			dispatch({type:'delete_user_failure'});
			console.log('Error deleting user');
		}
	};

	return (
		<div className='Settings'>
			<div className='settingsWrapper'>
				<div className='settingsTitle'>
					<span className='settingsUpdateTitle'>Update your Account</span>
					<button className='settingsDeleteButton' onClick={ handleDelete }>Delete your Account</button>
				</div>
				<form className='settingsForm'>
					<label>Profile Picture</label>
					<div className='settingsProfPic'>
						<img 
							src={ file ? URL.createObjectURL(file) : PUBLICFOLDER + user.profilePic }
							alt=''
						/>
						<label htmlFor='fileInput'>
							<i className="settingsProfPicIcon fa-solid fa-user"></i>
						</label>
						<input 
							type='file' 
							id='fileInput' 
							style={{ display: 'none' }} 
							onChange={(e)=>setFile(e.target.files[0])} 
						/>
					</div>
					<label>Username</label>
					<input 
						type='text' 
						placeholder={ user.username }
						onChange={(e)=>setUsername(e.target.value)}
					/>
					<label>Email</label>
					<input 
						type='email' 
						placeholder={ user.email }
						onChange={(e)=>setEmail(e.target.value)}
					/>
					<label>Password</label>
					<input 
						type='password'
						onChange={(e)=>setPassword(e.target.value)}
					/>
					<button className='settingsSubmit' onClick={ handleSubmit }>Update</button>
					{success && <span className='settingsSuccessMessage'>Profile has been successfully updated!</span>}
				</form>
			</div>
		</div>
	);
}