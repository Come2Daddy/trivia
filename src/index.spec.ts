// eslint-disable-next-line import/no-extraneous-dependencies
import runGoldenMaster from "jest-golden-master";
import { Game } from ".";

test("My first scenario", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.add("Clément");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});

test("A player gives a wrong answer and exits penlaty box", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(3);
    game.wasCorrectlyAnswered();
  });
});

test("A completes a turn out of penalty box", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(3);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(11);
    game.wasCorrectlyAnswered();
    game.roll(3);
    game.wasCorrectlyAnswered();
  });
});

test("A completes a turn", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(3);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(11);
    game.wasCorrectlyAnswered();
    game.roll(3);
    game.wasCorrectlyAnswered();
  });
});

test("A player gives a wrong answer and doesn't exit penlaty box with a correct answer", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(2);
    game.wasCorrectlyAnswered();
  });
});

test("A player gives a wrong answer and doesn't exit penlaty box with a wrong answer", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(2);
    game.wrongAnswer();
  });
});

test("A player gives a wrong answer and doesn't exit penlaty box with a wrong answer and an odd roll", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(3);
    game.wrongAnswer();
  });
});

test("A player gives a wrong answer and doesn't move", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(2);
    game.wasCorrectlyAnswered();
  });
});

test("Players are given all categories of question", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});

test("A player has won", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});

test("A player has won out of penalty box", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});

test("A player in penalty box gives a correct answer on an even roll", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(2);
    game.wasCorrectlyAnswered();
  });
});

test("A player in penalty box gives a correct answer on an even roll", async () => {
  runGoldenMaster(async () => {
    const game = new Game();
    game.add("Mathieu");
    game.add("Thomas");
    game.roll(1);
    game.wrongAnswer();
    game.roll(1);
    game.wasCorrectlyAnswered();
    game.roll(2);
    game.wasCorrectlyAnswered();
    game.roll(1);
    game.wasCorrectlyAnswered();
  });
});
