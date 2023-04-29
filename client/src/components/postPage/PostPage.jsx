import axios from 'axios';
import { React, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './postPage.css';
import { Context } from '../../context/Context';

export default function PostPage() {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const [post, setPost] = useState({});
	const PUBLICFOLDER = 'https://spiral-mountain.com/images' || 'http://localhost:5000/images/' ;
	const { user } = useContext(Context);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [author, setAuthor] = useState('');
	const [usernameId, setUsernameId] = useState('');
	const [updateMode, setUpdateMode] = useState(false);
    
    
	useEffect(() => {
		const getPost = async () =>  {
			const res = await axios.get('/posts/' + path);
			console.log(res);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
			setAuthor(res.data.username);
			setUsernameId(res.data.usernameId);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try{
			await axios.delete(`/posts/${post._id}`, {
				data:{usernameId:user._id},
			});
			console.log('Post successfully deleted');
			window.location.replace('/');
		}catch (err) {
			console.log('Error deleting post');
		}
	};

	const handleUpdate = async () => {
		try{
			await axios.put(`/posts/${post._id}`, {
				username:user.username, 
				title, 
				desc,
				usernameId,
			});
			if (usernameId === user._id) {
				setAuthor(user.username);// New attempt to create post/username parity
			}
			console.log('Post successfully updated');
			setUpdateMode(false);
		}catch (err) {
			console.log('Error updating post');
			console.log(post.usernameId);
			console.log(user._id);
			console.log(post.usernameId === user._id);
		}
	};
	
	return (
		<div className="postPage" >
			<div className='singlePostWrapper'>
				{ post.photo && (
					<img 
						src={PUBLICFOLDER + post.photo} 
						alt='' 
						className='singlePostImg'
					/>
				) || (
					<img 
						src='https://images.unsplash.com/photo-1580912458702-6fa698fc553e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
						alt='Default post image' 
						className='singlePostImg'
					/>
				)}
				{updateMode ? (
					<input
						type='text' 
						value={title} 
						className='singlePostTitleInput' 
						autoFocus
						onChange={(e)=>setTitle(e.target.value)}
					/>) : (
					<h1 className='singlePostTitle'>
						{title}
						{post.usernameId === user._id && (
							<div className='editSinglePost'>
								<i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
								<i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete()}></i>
							</div>
						)}
					</h1>
				)}
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>Author: <b>{author}</b></span>
					<span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
				</div>
				{updateMode ? (
					<textarea 
						className='singlePostDescInput' 
						value={desc}
						onChange={(e)=>setDesc(e.target.value)}
						style={{ whiteSpace: 'pre-wrap' }}	
					/>
				) : (
					<p className='singlePostDesc' style={{ whiteSpace: 'pre-wrap' }}>
						{desc}
					</p>
				)}
				{updateMode &&
				<button 
					className='singlePostButton' 
					onClick={handleUpdate}>
					Update
				</button>
				}
			</div>
		</div>
	);
}