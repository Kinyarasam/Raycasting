#!/usr/bin/env node
/**
 * @module routes
 */
const express = require('express');
const router = express.Router();
const path = require('path');

router.use(
	express.static('.', { index: 'index.html' })
);

router.get('/', (req, res) => {
  console.log('Home Route\n');
	res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = router;
