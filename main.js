#!/usr/bin/env node
const app = document.getElementById("app");
const context = app.getContext('2d');

const HEIGHT = app.clientHeight;
const WIDTH = app.clientWidth;
const FPS = 30;

const createRect = (x, y, width, height, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};

createRect(
  0, 0, WIDTH, HEIGHT, '#000000'
)

const draw = () => {
  /**
   * TODO: Draw contents to the screen.
   */
  console.log('drawing to the screen');
};

const update = () => {
  /**
   * TODO: Update the contents on the screen
   */ 
  console.log('Updates');
};

const gameLoop = () => {
  update();
  draw();
};

const startLoop = () => {
  setInterval(gameLoop, 1000 / FPS);
}

startLoop();
