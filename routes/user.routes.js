module.exports = app => {
    const users = require("../controller/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/createUser", users.create);

    // Login User
    router.post("/loginUser", users.login);
  
    // Retrieve all Users
    router.get("/getUsers", users.findAll);
  
    // Retrieve all published Users
    router.get("/published", users.findAllPublished);
  
    // Retrieve a single User with id
    router.get("/user/:id", users.findOne);
  
    // Update a User with id
    router.put("/updateUser/:id", users.update);
  
    // Delete a User with id
    router.delete("/deleteUser/:id", users.delete);
  
    // Delete all Users
    router.delete("/deleteUsers", users.deleteAll);
  
    app.use('/api/users', router);
  };