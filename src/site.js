const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const dbConfig = require('./config/db');

app.use(express.static('.'));

app.use(bodyParser.urlencoded({
    extended: true
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
    console.log("Website and API are running on port " + port + " . . .");
});