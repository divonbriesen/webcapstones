var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    app.post('/entity', (request, response) => {

            const entity = { Name: request.body.Name, Description: request.body.Description };

            db.collection('entities').insert(entity, (error, result) => {
                if (error) {
                    response.send({
                        'error': 'An error has occurred'
                    });
                }
                else {
                    response.send(result.ops[0]);
                }
            });
        }
    );

    app.get('/entity/:id', (request, response) => {

        const id = request.params.id;
        const details = { '_id': new ObjectID(id) };

        const collection = db.collection('entities');

        collection.findOne(details, (error, item) => {
            if (error) {
                response.send( {'error': 'An error has occurred'});
            }

            response.send(item);
        })
    });

    app.delete('/entity/:id', (request, response) => {

        const id = request.params.id;
        const details = { '_id': new ObjectID(id) };

        const collection = db.collection('entities');

        collection.remove(details, (error, item) => {
            if (error) {
                response.send( {'error': 'An error has occurred'});
            }

            response.send('Entity ' + id + ' deleted.');
        })
    });
};