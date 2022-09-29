import "./home.css"
import Posts from '../../components/posts/Posts';
import { useEffect, useState } from "react";
import axios from "axios";
// import setupProxy from "../../setupProxy";

// axios.defaults.baseURL = "http://localhost5000/api/"

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts");
            console.log(res)
        };
        fetchPosts();
    },[]);
    return (
        <>
            <div className="home">
                <Posts posts = {posts}/>
            </div>
        </>
    )
}