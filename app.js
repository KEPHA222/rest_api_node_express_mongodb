const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on Home');
});


//Connecting to database
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);

//Listening to the server
app.listen(3000, () => console.log("Serve listening on port 3000..."));