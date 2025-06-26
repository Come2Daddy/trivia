import Board from ".";

test("It shoud return a category as per a position", () => {
  expect(Board.getCategory(0)).toBe("Pop");
  expect(Board.getCategory(4)).toBe("Pop");
  expect(Board.getCategory(8)).toBe("Pop");
  expect(Board.getCategory(1)).toBe("Science");
  expect(Board.getCategory(5)).toBe("Science");
  expect(Board.getCategory(9)).toBe("Science");
  expect(Board.getCategory(2)).toBe("Sports");
  expect(Board.getCategory(6)).toBe("Sports");
  expect(Board.getCategory(10)).toBe("Sports");
  expect(Board.getCategory(3)).toBe("Rock");
  expect(Board.getCategory(7)).toBe("Rock");
  expect(Board.getCategory(11)).toBe("Rock");
});
