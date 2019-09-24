const path = require("path");

module.exports = function(app) {
 
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/data/public/survey/html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/data/public/home.html"));
  });
};
