import axios from 'axios';
import { React, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './postPage.css';
import { Context } from '../../context/Context';

export default function PostPage() {
	const location = useLocation();
	const path = location.pathname.split('/')[2];
	const [post, setPost] = useState({});
	const PUBLICFOLDER = 'http://localhost:5000/images/';
	const { user } = useContext(Context);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [updateMode, setUpdateMode] = useState(false);
    
    
	useEffect(() => {
		const getPost = async () =>  {
			const res = await axios.get('/posts/' + path);
			console.log(res);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try{
			await axios.delete(`/posts/${post._id}`, {
				data:{username:user.username},
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
			});
			console.log('Post successfully updated');
			setUpdateMode(false);
		}catch (err) {
			console.log('Error updating post');
		}
	};

	return (
		<div className="postPage">
			<div className='singlePostWrapper'>
				<img 
					src={PUBLICFOLDER + post.photo} 
					alt='' 
					className='singlePostImg'
				/>
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
						{post.username === user?.username && (
							<div className='editSinglePost'>
								<i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
								<i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
							</div>
						)}
					</h1>
				)}
				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
					<span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
				</div>
				{updateMode ? (
					<textarea 
						className='singlePostDescInput' 
						value={desc}
						onChange={(e)=>setDesc(e.target.value)}	
					/>
				) : (
					<p className='singlePostDesc'>
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

