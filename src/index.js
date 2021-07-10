import './index.scss';
import ClientGame from './client/ClientGame';

/*
import heroWalk from './assets/Male-3-Walk.png';
import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;

let pY = (canvas.height - spriteH) / 2;
let pX = (canvas.width - spriteW) / 2;

let bottomPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

let direction = 0;

 */
/*
const terrain = document.createElement('img');
terrain.src = terrainAtlas;

terrain.addEventListener('load', () => {
  const {map} = worldCfg;
  map.forEach((cfgRow, y) => {
    cfgRow.forEach((cfgCell, x) => {
      const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
      ctx.drawImage(terrain, sX, sY, sW, sH, x * spriteW, y * spriteH, spriteW, spriteH)
    })
  })
})
*/
/*
function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = true;
    direction = 0;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
    direction = spriteH * 3;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
    direction = spriteH;
  } else if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
    direction = spriteH * 2;
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

function walk(timestamp) {
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

  if (pX > canvas.width - spriteW) {
    pX -= 10;
  } else if (pX < 0) {
    pX += 10;
  }
  if (pY > canvas.height - spriteH) {
    pY -= 10;
  } else if (pY < 0) {
    pY += 10;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, 48, 48);

  window.requestAnimationFrame(walk)
}

img.addEventListener('load', () => {
  window.requestAnimationFrame(walk)
});
*/

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});
