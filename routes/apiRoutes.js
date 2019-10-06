// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

module.exports = function(app) {
    app.get("/api/mentors", function(req, res) {
      //THIS ROUTE WORKS! DON'T TOUCH IT!!!!
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Mentors.findAll({
        //include: [db.Post]
      }).then(function(dbMentor) {
        res.json(dbMentor);
      });
    });

    app.get("/api/mentors/:primary_help", function(req, res) {
       //Not sure if this is right
        db.Mentors.findAll({
          where: {
            primary_help: req.params.primary_help
          }
          //include: [db.Post]
        }).then(function(dbMentor) {
          res.json(dbMentor);
        });
      });
    
      app.get("/api/mentors", function(req, res) {
        //Not sure if this is right
         db.Mentors.findAll({
           where: {
             time_zone: req.query.time_zone
           }
           //include: [db.Post]
         }).then(function(dbMentor) {
           res.json(dbMentor);
         });
       });

      //  app.get("/api/mentors/:time_zone", function(req, res) {
      //   //Not sure if this is right
      //    db.Mentors.findAll({
      //      where: {
      //        time_zone: req.params.time_zone
      //      }
      //      //include: [db.Post]
      //    }).then(function(dbMentor) {
      //      res.json(dbMentor);
      //    });
      //  });
    
      //Post Mentor Information
      //replace mentors with "AddMentor" if something goes wrong
      app.post("/api/mentors", function(req, res) {
          //console.log(req.body);
        db.Mentors.create(
          req.body
        // mentor_name: 'Trae Shanks',
        // primary_help: 'Specific Coding Problem',
        // description: 'I am cool ',
        // institute_graduated: 'University of Washington Coding Boot Camp',
        // year_graduated: 2019,
        // time_zone: 'UTC-8: Pacific Standard Time (PST)'
     )
        .then(function (data) {
            res.json(data)
        })
        //take out yellow curly bracket and put at bottom if you want to keep the DELETE function
      });
    
    //   The DELETE ROUTE WORKS. DON'T TOUCH IT!!!
    //Ability to delete Mentor information (not sure if this is correct, might not keep)
      app.delete("/api/mentors", function(req, res) {
        db.Mentors.destroy({
              where: {
              id: req.query.id
          }
          }).then(function(dbMentor) {
              res.json(dbMentor);
           });
         })};
