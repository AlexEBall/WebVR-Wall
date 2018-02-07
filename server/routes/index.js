const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;



 
// serve  static assets on heroku
//if (process.env.NODE_ENV === "production") {
//  app.use(express.static("client/build"));

