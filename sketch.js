function setup() {
  createCanvas(400, 400);
}

const colors = ['red', 'white', 'blue'];

Array.prototype.choose = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function draw() {
  background(220);
  const grid = new Grid(14);

  grid.draw();
}
