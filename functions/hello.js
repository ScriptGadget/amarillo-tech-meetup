exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: '[("message": "Invitation sent ' + event.queryStringParameters['email'] + '")]'
    });
}
