import './home.css';
import Posts from '../../components/posts/Posts';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
// import setupProxy from "../../setupProxy";

axios.defaults.baseURL = 'https://spiral-mountain-api.onrender.com/api';

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get('/posts');
			const sortedPosts = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			setPosts(sortedPosts);
			console.log(sortedPosts);
		};
		fetchPosts();
	},[]);
	return (
		<>
			<div className="home">
				<Posts posts = {posts}/>
			</div>
		</>
	);
}