module.exports = function(app, db) {
    
    app.post('/entity', (request, response) => {
            const entity = { Name: request.body.Name, Description: request.body.Description };
            console.log(entity);

            // db.collection('entities').insert(entity, (error, result) => {
            //     if (error) {
            //         response.send({
            //             'error': 'An error has occurred'
            //         });
            //     }
            //     else {
            //         response.send(result.ops[0]);
            //     }
            // });

            response.send(entity);
        }
    );
};