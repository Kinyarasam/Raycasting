#!/usr/bin/env node
/**
 * @module routes
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home Route\n');
});

module.exports = router;
