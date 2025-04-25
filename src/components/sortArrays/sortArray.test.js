import { sortByRating } from "./sortArrays";

const testArray = [
  { index: 1, rating: 1 },
  { index: 2, rating: 2 },
  { index: 3, rating: 3 },
  { index: 4, rating: 4 },
  { index: 5, rating: 5 },
];

const expectedArray = [
  { index: 5, rating: 5 },
  { index: 4, rating: 4 },
  { index: 3, rating: 3 },
  { index: 2, rating: 2 },
  { index: 1, rating: 1 },
];

describe("Sorting", () => {
  it("Array should be sorted by highest rating", () => {
    testArray.sort(sortByRating);
    expect(testArray).toEqual(expectedArray);
  });
});
