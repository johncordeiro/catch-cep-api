var Parse = require('parse/node');
var express = require('express');
var app = express();
var request = require('request');


Parse.Cloud.define("singup", async (request) => {
  // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", "lucas lima");
    user.set("password", "123123123");
    user.set("email", "lucas.ala1999@gmail.com");

    user.save(null, {useMasterKey:true})
    .then((user) => {
      // Execute any logic that should take place after the object is saved.
      response.success(object.user);
    }, (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
       response.error(error.message);

    });
});

Parse.Cloud.define("create", async (request) => {
  const TestObject = Parse.Object.extend("TestObject");
  const lucas = new TestObject();

  lucas.set("Name", "Lucas Lima");
  lucas.set("Age", 19);
  lucas.set("Programer", true);

  lucas.save(null, {useMasterKey:true})
  .then((lucas) => {
    // Execute any logic that should take place after the object is saved.
    response.success(object.lucas);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
     response.error(error.message);

  });
});

Parse.Cloud.define("cep", async (request) => {
  router.get('/', function(req, res, next) {
    request({
      uri: 'http://www.giantbomb.com/api/search',
      qs: {
        api_key: '123456',
        query: 'World of Warcraft: Legion'
      }
    }).pipe(res);
  });

  module.exports = router;


});
