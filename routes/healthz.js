const express = require('express');

const healthz = require('../../controllers/healthz/healthz');

const router = express.Router();

router.get('/healthz', healthz);

module.exports = router;
