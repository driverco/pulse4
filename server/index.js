const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use('/api/users', require('./api/users'));
//app.use('/api/stats', require('./api/stats'));

if (ENV === 'production') {
    console.log("Starting server in Production Mode");
    app.use(express.static(path.join(__dirname, '../client/dist/browser')));
    app.use((req, res) => {
       res.sendFile(path.join(__dirname, '../client/dist/browser/index.html'));
    });
}

app.listen(PORT, () => {
    console.log("Apolo1 v 0.1.0 running");
    console.log("---------------------------------");
    console.log("Server listening on port "+PORT+"!");
    console.log("powered by Driverco");
    console.log("Starting Mode:"+process.env.NODE_ENV);
  });

  module.exports = app;