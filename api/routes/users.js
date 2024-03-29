const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

//Update
router.put("/:id", async (req, res)=>{
    if (req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                {
                $set: req.body, 
                }, 
                { new: true }
            );
                res.status(200).json(updatedUser);
        } catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(401).json("Update only, try again");
    }
});


//Delete
router.delete("/:id", async (req, res)=>{
    // if (req.body.userId === req.params.id){
       try{
            const user = await User.findById(req.params.id);
           try{
                await Post.deleteMany({usernameId:user.id});
                //^set to delete all posts associated with user
                //^^may need to be updated with new usernameId data added to each post as main identifier
                //^^^updated from {username:user.username} to usernameId:user._id
                //^^^^This seems to be the current major problem child
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User successfully deleted");
            } catch(err){
                res.status(500).json(err);
            }
        } catch(err){
            res.status(404).json("User not found");
        }
    // } else{
    //     res.status(401).json("Deletion failed, try again");
    // }
});

//Get user
router.get("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router