import Player from ".";

test("It should not lead to player victory", () => {
  const player = new Player("Karl");

  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();

  expect(player.hasWon()).toBe(false);
});

test("It should lead to player victory", () => {
  const player = new Player("Karl");

  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();

  expect(player.hasWon()).toBe(true);
});

test("It should not lead to player victory (score over the threshold)", () => {
  const player = new Player("Karl");

  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();
  player.addPoint();

  expect(player.hasWon()).toBe(false);
});
