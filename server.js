#!/usr/bin/env node
const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/index');
dotenv.config();

const PORT = process.env.SERVER_PORT || 4000;

const app = express();

/* Middleware */
app.use('/', router); 

const start = () => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

start();

module.exports = app;
