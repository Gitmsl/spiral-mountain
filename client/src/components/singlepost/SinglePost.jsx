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
					src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					// above source should be a good backup image
					alt="Placeholder post image: the Playstation 5 home console on a white background"
				/>
			)}
			<div className="postInfo">
				<div className="postCategories">{
					post.categories.map(c=>(
						<span className="postCat">{c.name}</span>
					))}
				</div>
				<Link to ={`/post/${post._id}`}>
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