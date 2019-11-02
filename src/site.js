const express = require('express');
const app = express();

app.use(express.static('.'));

const bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({
    extended: true
//}));
thing = {extended: true};
thing2 = bodyParser.urlencoded(thing);
app.use(thing2);

const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('./config/db');
const dbName = "capstone"; // name used on mongo site?
const routesPath = "./app/routes"

MongoClient.connect(dbConfig.url, (error, client) => {
    if (error) {
        return console.log(error);
    }

    const database = client.db(dbName);
    const routes = require(routesPath);
    routes(app, database);
});

const port = 3000;
var startupMessage = `Website and API are running on port  + ${port}  . . .`;
var reportAppStatus = () => console.log(startupMessage);

var server = app.listen(port, reportAppStatus);