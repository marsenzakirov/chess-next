export function isWhiteOnCell(index: number | boolean, board: any[]) {
  if (typeof index == "boolean") return "offTheBoard";
  if (board[index] != undefined) {
    if (board[index].slice(1) == "W") {
      return true;
    } else {
      return false;
    }
  }
}

export function move(indexFrom: number, indexTo: number, array: any[]) {
  
  array[indexTo] = array[indexFrom];
  array[indexFrom] = undefined;
  return array;
}
