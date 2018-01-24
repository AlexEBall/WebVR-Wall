const express = require('express');
const router  = express.Router();

const main_api = require('../apis/main_api');

router.get('/', main_api.index);

module.exports = router;