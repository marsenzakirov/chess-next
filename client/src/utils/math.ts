export function coordinatesOnIndex(x: number, y: number): number {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return y * 8 + x;
  return -1;
}
