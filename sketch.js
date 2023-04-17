function setup() {
  createCanvas(400, 400);
}

const colors = [
  '#f94144',
  '#f3722c',
  '#f8961e',
  '#f9844a',
  '#f9c74f',
  '#90be6d',
  '#43aa8b',
  '#4d908e',
  '#577590',
];

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let color = 0;

let counter = 0;

let currentGrid = [];

function draw() {
  background(220);
  const grid = new Grid(14);

  counter += 1;

  const newGrid = grid.grid.map((row) => {
    return row.map((cell) => {
      color = (color + 1) % colors.length;
      return {
        ...cell,
        fill: colors[color],
      };
    });
  });

  if (counter % 4 === 0) {
    currentGrid = newGrid;
  }

  grid.grid = currentGrid;

  grid.draw();
}
