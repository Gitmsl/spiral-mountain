const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create new post
router.post("/", async (req, res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch(err){
        res.status(500).json(err);
    }
});

//Update post
router.put("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.usernameId === req.body.usernameId){
            //NEW above previously had usernameId as username...
            //GOAL: usernameId linked to post === current user id#. 
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set:req.body,
                },
                { new: true }
                );
                res.status(200).json(updatedPost);
            } catch(err){
                res.status(500).json(err);
                console.log("backend error checks");
            }
        } else{
            res.status(401).json("You can only update your own posts");
        }
    } catch(err){
        res.status(500).json(err);
    }
});

//Delete post
router.delete("/:id", async (req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.usernameId === req.body._id){
            //NEW^ username switched to usernameId, since ID# cannot be updated (only screen name)
            //may need to change req.body.usernameId to req.body._id
            try{
                await post.delete()
                res.status(200).json("Post successfully deleted");
            } catch(err){
                res.status(500).json(err);
            }
        } else{
            res.status(401).json("You can only delete your own posts");
        }
    } catch(err){
        res.status(500).json(err);
    }
});

//Get post
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get all posts
router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({username});
        } else if(catName){
            posts = await Post.find({categories:{
                $in:[catName],
            },
        });
    } else{
        posts = await Post.find();
    }
    res.status(200).json(posts);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router