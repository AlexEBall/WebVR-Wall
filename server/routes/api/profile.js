const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// matches with "/api/profile"
router.route("/api/profile")
    .get(profileController.findAll)

// matches with "/api/profile/:id"
router
    .route("/api/profile/:id")
    .get(profileController.findById)

module.exports = router;