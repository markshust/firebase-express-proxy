/**
 * firebase-express-proxy
 * 
 * This script creates a simple proxy which passes GET requests to Firebase.
 * 
 * This is useful if you have your own custom domain that you want to use with
 * Firebase for GET requests, and have simple needs.
 * 
 * Author: Mark Shust <mark@shust.com>
 */

var express = require('express'),
    app = express(),
    Firebase = require('firebase'),
    fbUrl = 'https://your-instance.firebaseio.com',
    proxyPath = '/api',
    server = app.listen(3000);

app.get(proxyPath + '/*', fbRes);

function fbRes(req, res) {
    var path = req.originalUrl.replace(proxyPath, '');
    var ref = new Firebase(fbUrl + path);

    if (path == '/') res.json({});
   
    ref.once('value', function(snapshot) {
        res.json(snapshot.val());
    }); 
};

