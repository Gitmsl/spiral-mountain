require('dotenv').config();
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


//START... cd api, npm start

// mongoose.createConnection(process.env.MONGO_URL).asPromise(console.log("Connected to MongoDB!"));

// async function run() {
//     try{
// mongoose.createConnection(process.env.MONGO_URL).asPromise(console.log("Connected to MongoDB!"));
//     } catch (e) {
//         console.log(e.message)
//     }}

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
    app.listen("5000", () => {
        console.log("Backend is running.")
    });
});
