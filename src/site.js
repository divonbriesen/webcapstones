const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');

app.use(express.static('.'));  // tell express to serve static webpages. dot indicates same directory we're in

app.use(bodyParser.urlencoded({  // add ability to deserialize data in the url... i.e. query string data
    extended: true  // this is a configuration object
}));

const port = 3000;

MongoClient.connect(dbConfig.url, (error, client) => {
    if (error) {
        return console.log(error);
    }

    const database = client.db("capstone");
    const routes = require('./app/routes');
    routes(app, database);
});

var server = app.listen(port, () => { 
    console.log("Webserver and API are running on port " + port + " . . .");
});