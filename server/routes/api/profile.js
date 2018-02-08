const express = require('express');
const router = express.Router();
const profileController = require("../../controllers/profileController");

// matches with "/api"
router.get("/", profileController.findAll);
// matches with "/api/:id"
router.get("/:id", profileController.findById);
// matches with "/api/create
router.post("/create", profileController.create);
// matches with "/api/remove/:id
router.put("/remove/:id", profileController.remove);

module.exports = router;