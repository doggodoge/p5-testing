class Grid {
  constructor(squareSize, width, height) {
    this.squareSize = this.#closestDivisible(squareSize);
    /** @type {Array<Array<{ squareSize: number; x: number; y: number; fill: string; }>>} */
    this.grid = this.#initializeGrid();
    this._width = width;
    this._height = height;
  }

  draw() {
    for (const row of this.grid) {
      for (const cell of row) {
        noStroke();
        fill(cell.fill);
        square(cell.x, cell.y, cell.squareSize);
      }
    }
  }

  #initializeGrid() {
    const grid = [];
    for (let h = 0; h < height / this.squareSize; h++) {
      grid[h] = [];
      for (let w = 0; w < width / this.squareSize; w++) {
        grid[h][w] = {
          squareSize: this.squareSize,
          x: this.squareSize * w,
          y: this.squareSize * h,
          fill: 'white',
        };
      }
    }
    return grid;
  }

  #closestDivisible(squareSize) {
    while (width % squareSize !== 0 || height % squareSize !== 0) {
      squareSize--;
    }
    return squareSize;
  }
}
