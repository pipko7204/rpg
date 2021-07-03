import './index.scss';
import heroWalk from './assets/Male-3-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

let pY = 276;
let pX = 276;

let bottomPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

let direction = 0;

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = true;
    direction = 0;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
    direction = 144;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
    direction = 48;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
    direction = 96;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = false;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = heroWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    if (bottomPressed) {
      pY += 10;
      cycle = (cycle + 1) % shots;
    } else if (upPressed) {
      pY -= 10;
      cycle = (cycle + 1) % shots;
    } else if (leftPressed) {
      pX -= 10;
      cycle = (cycle + 1) % shots;
    } else if (rightPressed) {
      pX += 10;
      cycle = (cycle + 1) % shots;
    }

    if (pX > 552) {
      pX -= 10;
    } else if (pX < 0) {
      pX += 10;
    }
    if (pY > 552) {
      pY -= 10;
    } else if (pY < 0) {
      pY += 10;
    }

    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});

ctx.fillStyle = 'red';
ctx.strokeRect(20, 20, 200, 100);
ctx.fillRect(10, 10, 590, 590);
