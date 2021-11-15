const express = require('express');
const router = express.Router();

const personRouter = require('./personRouter');

router.use('/persons', personRouter);

module.exports = router;