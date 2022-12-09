interface pos {
  i: number;
  j: number;
};

export const findLessCostPath = (board: number[][]): number => {
  const n = board.length;
  const m = board[0].length;
  let newBoard: number[][] = Array(n).fill([]).map(() => Array(m).fill(999999999));
  let list = Array<pos>();
  list.push({ i: 0, j: 0 });
  while (list.length) {
    let curItem = list.pop();
    if (curItem) {
      const curValue = board[curItem.i][curItem.j];
      if (curItem.i === 0 && curItem.j === 0) {
        newBoard[curItem.i][curItem.j] = curValue;
      }
      if (curItem.i < n - 1
        && newBoard[curItem.i][curItem.j] + board[curItem.i + 1][curItem.j] < newBoard[curItem.i + 1][curItem.j]) {
        newBoard[curItem.i + 1][curItem.j] = newBoard[curItem.i][curItem.j] + board[curItem.i + 1][curItem.j];
        list.push({ i: curItem.i + 1, j: curItem.j });
      }
      if (curItem.j < m - 1
        && newBoard[curItem.i][curItem.j] + board[curItem.i][curItem.j + 1] < newBoard[curItem.i][curItem.j + 1]) {
        newBoard[curItem.i][curItem.j + 1] = newBoard[curItem.i][curItem.j] + board[curItem.i][curItem.j + 1];
        list.push({ i: curItem.i, j: curItem.j + 1 });
      }
      if (curItem.i > 0
        && newBoard[curItem.i][curItem.j] + board[curItem.i - 1][curItem.j] < newBoard[curItem.i - 1][curItem.j]) {
        newBoard[curItem.i - 1][curItem.j] = newBoard[curItem.i][curItem.j] + board[curItem.i - 1][curItem.j];;
        list.push({ i: curItem.i - 1, j: curItem.j });
      }
      if (curItem.j > 0
        && newBoard[curItem.i][curItem.j] + board[curItem.i][curItem.j - 1] < newBoard[curItem.i][curItem.j - 1]) {
        newBoard[curItem.i][curItem.j - 1] = newBoard[curItem.i][curItem.j] + board[curItem.i][curItem.j - 1];;
        list.push({ i: curItem.i, j: curItem.j - 1 });
      }
    }
  }

  return newBoard[n - 1][m - 1] - board[n - 1][m - 1];
};
