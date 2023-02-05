const n = 8;
const cols = new Array(n).fill(0);

function backtrack (row){
  if (row === n) {
    return true;
  }

  for (let col = 0; col < n; col++) {
    if (isSafe(row, col)) {
      cols[row] = col;
      if (backtrack(row + 1)) {
        return true;
      }
      cols[row] = 0;
    }
  }
  return false;
};

function isSafe (row,col) {
  for (let r = 0; r < row; r++) {
    const c = cols[r];

    if (c === col) {
      return false;
    }

    if (Math.abs(c - col) === Math.abs(r - row)) {
      return false;
    }
  }
  return true;
};

backtrack(0);
console.log(cols);