// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ItemRoute = require("./Routes/index")
const connectDB = require('./Database');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(bodyParser.json());
app.use("/", ItemRoute)
app.use(cors)

connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });




