import "./singlepost.css"

export default function SinglePost() {
    return (
        <div className="singlepost">
            <img 
                className="postImg"
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
            />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    The First Major Post
                </span>
                <hr/>
                <span className="postDate">2 hours ago</span>
            </div>
            <p className="postDesc">This is the content of the review. A brief synopsis of the game's background, its franchise or
            its origin or creation, followed by a detailed analysis of its most important core elements. The
            important core elements of the game are: Gameplay, how it handles and if it's fun, narrative, and music/ambiance--
            as some games lean more heavily into ambience vs melodic or catchy themes, like the Dead Space or Bioshock franchises.
            In the final version of the review site, this will be a short clip of the review, and clicking the post container will 
            take the user to the full-page review.</p>
        </div>
    )
}