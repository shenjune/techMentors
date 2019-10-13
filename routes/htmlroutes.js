var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/mentorList", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mentorList.html"));
  });

  app.get("/mentorApplication", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mentorApplication.html"));
  });

  app.get("/mentorConfirm", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mentorConfirm.html"));
  });

};