function setup() {
  createCanvas(400, 400);
}

const colors = ['red', 'white', 'blue'];

function choose(arr) {
  return arr[Math.floor(Math.random() * this.length)];
}

function draw() {
  background(220);
  const grid = new Grid(14);

  for (row in grid.grid) {
    for (cell in row) {
      cell.fill = choose(colors);
    }
  }

  grid.draw();
}
