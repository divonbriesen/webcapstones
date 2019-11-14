var ObjectID = require('mongodb').ObjectID;
var aListOfItems = ["x", "y"];
module.exports = function (app, db) { // module refers to the filename of THIS file... kinda like "this"

    app.post('/entity', (request, response) => {

        const entity = { Name: request.body.Name, Description: request.body.Description };

        db.collection('entities').insert(entity, (error, result) => {
            if (error) {
                response.send({ 'error': 'An error has occurred' });
            }

            response.send(result.ops[0]);
        });
    }
    );

    app.get('/entity/:id', (request, response) => {

        const id = request.params.id;
        const details = { '_id': new ObjectID(id) };

        const collection = db.collection('entities');

        collection.findOne(details, (error, item) => {
            if (error) {
                response.send({ 'error': 'An error has occurred' });
            }

            response.send(item);
        })
    });

    app.get('/entity', (request, response) => {

        const collection = db.collection('entities');
        this.aListOfItems = [];
        
        var thing = collection.find();
        var thing2 = collection.distinct('Name');
        //   thing2.forEach((item) => console.log("Name" + item));



        aListOfItems.push("z");
        thing.forEach(theMethod);

        aListOfItems.push("AA");

        response.send(aListOfItems);
        //console.log( collection);
    });

    function  theMethod(item) {
        console.log(item);
        //aListOfItems.push(item.Name);
        aListOfItems.push("up urs");
    }


    app.delete('/entity/:id', (request, response) => {

        const id = request.params.id;
        const details = { '_id': new ObjectID(id) };

        const collection = db.collection('entities');

        collection.remove(details, (error, item) => {
            if (error) {
                response.send({ 'error': 'An error has occurred' });
            }

            response.send('Entity ' + id + ' deleted.');
        })
    });

    app.put('/entity/:id', (request, response) => {

        const id = request.params.id;
        const details = { '_id': new ObjectID(id) };

        const entity = { Name: request.body.Name, Description: request.body.Description };

        db.collection('entities').update(details, entity, (error, result) => {
            if (error) {
                response.send({
                    'error': 'An error has occurred'
                });
            }

            response.send(entity);
        })
    });

}