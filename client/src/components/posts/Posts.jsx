import SinglePost from "../singlepost/SinglePost";
import "./posts.css";

export default function Posts({posts}) {
    return (
        <div className="posts">
            {posts?.map((p)=>(
                <SinglePost post = {p}/>
            ))}
        </div>
    )
}