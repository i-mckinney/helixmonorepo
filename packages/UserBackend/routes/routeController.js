

//creating a user
exports.createUser = (request, response) => {
    const user = request.body;
    dbCollection.insertOne(user, (error, result) => { // callback of insertOne
        if (error) throw error;
        // return updated list
        dbCollection.find().toArray((_error, _result) => { // callback of find
            if (_error) throw _error;
            response.json(_result);
        });
    });
}

exports.getUser = (request, response) => {
    const userId = request.params._id;

    dbCollection.findOne({ "_id.$oid": userId }, (error, result) => {
        if (error) throw error;
        // return item
        response.json(result);
    });
}

exports.getAllUsers = (request, response) => {
    // return updated list
    dbCollection.find().toArray((error, result) => {
        if (error) throw error;
        response.json(result);
    });
}

exports.updateUser = (request, response) => {
    const userId = request.params.id;
    const user = request.body;
    console.log("Editing item: ", userId, " to be ", user);

    dbCollection.updateOne({ "_id.$oid": userId }, { $set: user }, (error, result) => {
        if (error) throw error;
        // send back entire updated list, to make sure frontend data is up-to-date
        dbCollection.find().toArray(function(_error, _result) {
            if (_error) throw _error;
            response.json(_result);
        });
    });
}

exports.deleteUser = (request, response) => {
    const userId = request.params.id;
    console.log("Delete item with id: ", userId);

    dbCollection.deleteOne({ "_id.$oid": userId }, function(error, result) {
        if (error) throw error;
        // send back entire updated list after successful request
        dbCollection.find().toArray(function(_error, _result) {
            if (_error) throw _error;
            response.json(_result);
        });
    });
}

