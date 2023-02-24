const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true //no duplicate usernames
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"",
    },
}, 
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);