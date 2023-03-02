/* eslint-disable react/prop-types */
import React from 'react';
import './singlepost.css';
import {Link} from 'react-router-dom';


export default function SinglePost({post}) {
	const PUBLICFOLDER = 'http://localhost:5000/images/';
	return (
		<div className="singlepost">
			{ post.photo && (
				<img 
					className="postImg"
					src={PUBLICFOLDER + post.photo}
					alt=""
				/>
			) || (
				<img 
					className="postImg"
					src='https://images.unsplash.com/photo-1580912458702-6fa698fc553e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					alt="Placeholder post image: the Playstation 5 home console on a white background"
				/>
			)}
			<div className="postInfo">
				<div className="postCategories">{
					post.categories.map(c=>(
						<span className="postCat" key={c.name}>{c.name}</span>
					))}
				</div>
				<Link to ={`/post/${post._id}`} className="linkStyle">
					<span className="postTitle">
						{post.title}
					</span>
				</Link>
				<hr className="hrLine"/>
				<span className="postDate">{new Date(post.createdAt).toDateString()}</span>
			</div>
			<p className="postDesc">{post.desc}</p>
		</div>
	);
}