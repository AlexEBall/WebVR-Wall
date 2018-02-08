const express = require('express');
const router = express.Router();
const profileController = require("../../controllers/profileController");

// matches with "/api"
router.get("/", profileController.findAll);
// matches with "/api/:id"
router.get("/:id", profileController.findById);
// matches with "/api/create
router.post("/create", profileController.create);

module.exports = router;