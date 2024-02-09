function pageCount(n, p) {
  if (p === 1 || n === p) return 0;
  if ((n % 2 === 0 && n - 1 === p)) return 1
  return Math.floor(Math.min(p / 2, Math.abs(Math.floor(n / 2 - p / 2))));
}