// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
//THIS ROUTE WORKS! DON'T TOUCH IT!!!!
module.exports = function(app) {
  app.get("/api/mentors", function(req, res) {
    db.Mentors.findAll({
      }).then(function(dbMentor) {
        res.json(dbMentor);
      });
  });

  app.get("/api/primary_help/:primary_help", function(req, res) {
    // WORKS
    db.Mentors.findAll({
      where: {
        primary_help: req.params.primary_help
      }
    }).then(function(dbMentor) {
      res.json(dbMentor);
    });
  });
    
  app.get("/api/time_zone/:time_zone", function(req, res) {
    //WORKS
    db.Mentors.findAll({
      where: {
        time_zone: req.params.time_zone
      }
    }).then(function(dbMentor) {
      res.json(dbMentor);
    });
  });

  app.get("/api/primaryhelp_timezone/:primary_help/:time_zone", function(req, res) {
    //WORKS
    db.Mentors.findAll({
      where: {
        primary_help: req.params.primary_help,
        time_zone: req.params.time_zone
      }
    }).then(function(dbMentor) {
      res.json(dbMentor);
    });
  });

  //Post Mentor Information
  app.post("/api/mentors", function (req, res) {
    db.Mentors.create(req.body).then(function(dbMentor) {
      res.json(dbMentor);
    });
  })

  app.get("/api/mentors", function (req, res) {
    db.Mentors.findAll({}).then(function(dbMentor) {
      res.json(dbMentor);
    });
  })

//   The DELETE ROUTE WORKS. DON'T TOUCH IT!!!
//Ability to delete Mentor information (not sure if this is correct, might not keep)
  app.delete("/api/mentors/:id", function(req, res) {
    db.Mentors.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMentor) {
      res.json(dbMentor);
    });
  })
};
