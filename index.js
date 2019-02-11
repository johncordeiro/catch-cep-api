var express = require('express');
var Parse = require('parse');
var ParseServer = require('parse-server').ParseServer;
var app = express();

var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
  cloud: 'main.js', // Absolute path to your Cloud Code
  appId: '33251611',
  masterKey: '40028922', // Keep this key secret!
  restAPIKey: '988104506',
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});
