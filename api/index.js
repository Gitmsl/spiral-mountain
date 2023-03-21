require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || "5000";
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

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.spiral-mountain.com");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

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

app.get('/', (req, res) => res.type('html').send(html));

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

    app.listen(port, "0.0.0.0", () => {
        console.log(`Server up and listening on http://0.0.0.0:${port}`)
    });
});

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Spiral-Mountain API!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
        color: red;
        -webkit-text-stroke: .5px gold;
      }
      body {
        background: rgb(7, 87, 0);
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Spiral-Mountain API!
    </section>
  </body>
</html>
`
