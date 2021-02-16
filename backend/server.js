const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');

require('dotenv').config();

const app = express();
//Setting up port for Heroku config.
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//Bodyparser Middleware
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const inventoryRouter = require('./routes/api/inventoryitems');
//use routes
app.use('/inventoryitems', inventoryRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});