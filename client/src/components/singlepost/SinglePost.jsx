import Posts from "../posts/Posts";
import "./singlepost.css";
import {Link} from "react-router-dom";

export default function SinglePost({post}) {
    return (
        <div className="singlepost">
        {post.photo && (
            <img 
                className="postImg"
                src={post.photo}
                alt=""
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
    )
}