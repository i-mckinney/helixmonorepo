// server.js
const routes = require('./routes/routeController');
const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./db");
const { response } = require('express');
const dbName = "users";
const collectionName = "usercollection";

// << db init >>
db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function(err, result) {
        if (err) throw err;
          console.log(result);
    });

    server.post("/users", routes.createUser(request, response));

    server.get("/users/:id", routes.getUser(request, response));

    server.get("/users", routes.getAllUsers(request, response));

    server.put("/users/:id", routes.updateUser(request, response));

    server.delete("/users/:id", routes.deleteUser(request, response));

}, function(err) { // failureCallback
    throw (err);
});

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});