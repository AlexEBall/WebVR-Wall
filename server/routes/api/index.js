const router = require("express").Router();
const profileRoutes = require("./profile");

// routes
router.use("/profile", profileRoutes);

module.exports = router;
