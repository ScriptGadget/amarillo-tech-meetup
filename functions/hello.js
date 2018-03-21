exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: "Invitation sent, " + event.queryStringParameters['email']
    });
}
