import React from 'react';
import PropTypes from 'prop-types';
import SinglePost from '../singlepost/SinglePost';
import './posts.css';

Posts.propTypes = {
	posts: PropTypes.array.isRequired,
};

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