function closestDivisible(squareSize) {
  while (width % squareSize !== 0 || height % squareSize !== 0) {
    squareSize--;
  }
  return squareSize;
}

class Grid {
  constructor(squareSize) {
    this.squareSize = closestDivisible(squareSize);
  }

  draw() {
    for (let h = 0; h < height / this.squareSize; h++) {
      for (let w = 0; w < width / this.squareSize; w++) {
        square(this.squareSize * w, this.squareSize * h, this.squareSize);
      }
    }
  }
}
