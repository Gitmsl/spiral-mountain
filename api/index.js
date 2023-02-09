require('dotenv').config();
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require('path');

dotenv.config();


//START... cd api, npm start

app.use(express.json());

app.use('/images', express.static(path.join(__dirname,'/images')));

//MONGODB connect function
const connectDB = async ()  => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
};

//Connect MongoDB
connectDB();

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images");
    }, filename:(req,file,cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) => {
    res.status(200).json("File successfully uploaded");
});

app.get('/', (req, res) => {
    console.log('Express.js')
});

app.get('/users', (req, res) => {
    console.log('User List')
});

app.get('/users/new', (req, res) => {
    console.log('User New Form')
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');

    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/posts", postRoute);
    app.use("/api/categories", categoryRoute);

    app.listen("5000", () => {
        console.log("Backend is running.")
    });
});
