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

test("It should change position as per displacement (less than board size)", () => {
  const board = new Board();

  board.move(6);

  expect(board.getPosition).toBe(6);
});

test("It should change position as per displacement (more than board size)", () => {
  const board = new Board();

  board.move(15);

  expect(board.getPosition).toBe(3);
});

test("It should change position as per consecutive displacements", () => {
  const board = new Board();

  board.move(6);
  board.move(6);
  board.move(3);

  expect(board.getPosition).toBe(3);
});

test("It should complete a turn as per consecutive displacements", () => {
  const board = new Board();

  board.move(6);
  expect(board.hasCompletedTurnOnDisplacement).toBe(false);

  board.move(5);
  expect(board.hasCompletedTurnOnDisplacement).toBe(false);

  board.move(3);
  expect(board.hasCompletedTurnOnDisplacement).toBe(true);

  board.move(6);
  expect(board.hasCompletedTurnOnDisplacement).toBe(false);
});
