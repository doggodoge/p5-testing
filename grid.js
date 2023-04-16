class Grid {
  constructor(squareSize, width, height) {
    this.squareSize = this.#closestDivisible(squareSize);
    this._width = width;
    this._height = height;
    this._grid = this.#initializeGrid();
  }

  draw() {
    for (const row of this._grid) {
      for (const cell of row) {
        console.log(cell);
        fill(cell.fill);
        square(cell.x, cell.y, cell.squareSize);
      }
    }
  }

  #initializeGrid() {
    for (let h = 0; h < height / this.squareSize; h++) {
      this._grid[h] = [];
      for (let w = 0; w < width / this.squareSize; w++) {
        this._grid[h][w] = {
          squareSize: this.squareSize,
          x: this.squareSize * w,
          y: this.squareSize * h,
          fill: 'white',
        };
      }
    }
  }

  #closestDivisible(squareSize) {
    while (width % squareSize !== 0 || height % squareSize !== 0) {
      squareSize--;
    }
    return squareSize;
  }
}
