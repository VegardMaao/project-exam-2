export function sortByRating(a, b) {
  if (a.rating > b.rating) {
    return -1;
  }

  if (a.rating > b.rating) {
    return 1;
  }

  return 0;
}
