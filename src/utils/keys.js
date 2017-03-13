const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;




export function isLeft(keyCode) {
  return keyCode === LEFT;
}

export function isUp(keyCode) {
  return keyCode === UP;
}

export function isRight(keyCode) {
  return keyCode === RIGHT;
}

export function isDown(keyCode) {
  return keyCode === DOWN;
}
