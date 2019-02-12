var Parse = require('parse/node');
var express = require('express');
var app = express();


Parse.Cloud.define("singup", async (request) => {
  // Create a new instance of the user class
    var user = new Parse.User();
    user.set("username", "lucas lima");
    user.set("password", "123123123");
    user.set("email", "lucas.ala1999@gmail.com");

    user.save(null, {useMasterKey:true})
    .then((gameScore) => {
      // Execute any logic that should take place after the object is saved.
      response.success(object.user);
    }, (error) => {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
       response.error(error.message);

    });
});

Parse.Cloud.define("create", async (request) => {
  const GameScore = Parse.Object.extend("GameScore");
  const gameScore = new GameScore();

  gameScore.set("score", 1337);
  gameScore.set("playerName", "Sean Plott");
  gameScore.set("cheatMode", false);

  gameScore.save()
  .then((gameScore) => {
    // Execute any logic that should take place after the object is saved.
    response.success(1);
    alert('New object created with objectId: ' + gameScore.id);
  }, (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
     response.error(error.message);

  });
});

Parse.Cloud.define("cep", async (request) => {
  response.success("hello world")
});
