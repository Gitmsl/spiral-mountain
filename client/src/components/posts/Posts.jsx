import React from 'react';
import SinglePost from '../singlepost/SinglePost';
import './posts.css';

export default function Posts({posts}) {
	return (
		<div className="posts">
			{posts?.map((p)=>(
				<SinglePost 
					post = {p} 
					key = {p._id} 
				/>
			))}
		</div>
	);
}