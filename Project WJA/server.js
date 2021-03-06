// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setting the port
const port = 8080;

// Setup Server 
const server = app.listen(port, intiating);
function intiating() {
    console.log(`running on: http://localhost:${port}`);
}
// Getting data
app.get('/all', sendData); 

function sendData(req,res) {
    res.send(projectData);
}

// Posting data 
app.post('/add', postData);

function postData(req,res) {
   projectData = req.body;
    res.send(projectData)
    console.log(projectData);
};