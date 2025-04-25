import { formatDate } from "./formatDate";

const unformattedDate = `2025-02-16T21:32:46.209Z`;
const formattedDate = `16.02.2025`;


describe("Formatting", () => {
  it("Date should be formatted to DDMMYYYY", () => {
    const newFormat = formatDate(unformattedDate);
    expect(newFormat).toEqual(formattedDate);
  });
});
