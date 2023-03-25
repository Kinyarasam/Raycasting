#!/usr/bin/env node
const app = document.getElementById("app");
const context = app.getContext('2d');

const HEIGHT = app.clientHeight;
const WIDTH = app.clientWidth;

const createRect = (x, y, width, height, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};

createRect(
  0, 0, WIDTH, HEIGHT, '#000000'
)
