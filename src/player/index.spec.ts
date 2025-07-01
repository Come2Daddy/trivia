import Player from ".";

test("It should not lead to player victory", () => {
  const player = new Player("Karl");

  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);

  expect(player.hasWon()).toBe(false);
});

test("It should lead to player victory", () => {
  const player = new Player("Karl");

  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);

  expect(player.hasWon()).toBe(true);
});

test("It should not lead to player victory (score over the threshold)", () => {
  const player = new Player("Karl");

  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);
  player.giveCorrectAnswer(1);

  expect(player.hasWon()).toBe(false);
});
