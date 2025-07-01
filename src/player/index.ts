import Board from "../board";
import type AllQuestions from "../allQuestions";
class Player {
  private board: Board = new Board();

  private points: number = 0;

  private diceRoll: number = 0;

  inPenaltyBox: boolean = false;

  isGettingOutOfPenaltyBox: boolean = false;

  constructor(private playerName: string) {}

  addPoint(): void {
    console.log(`Player ${this.playerName} has gained a point`);
    this.points += 1;

    if (this.hasWon()) {
      console.log(`Player ${this.playerName} has won`);
    }
  }

  hasWon(): boolean {
    return this.points === 6;
  }

  roll(allQuestions: AllQuestions, diceRoll: number): void {
    console.log(`Dice rolled on ${diceRoll}`);

    this.diceRoll = diceRoll;

    this.challengePenalty();

    if (!this.inPenaltyBox) this.board.move(diceRoll);

    if (this.board.hasCompletedTurnOnDisplacement) console.log(`Player ${this.playerName} has completed a turn`);

    if (!this.inPenaltyBox) console.log(`Player ${this.playerName} is moved to ${this.board.getPosition}`);

    if (!this.inPenaltyBox) this.askQuestion(allQuestions);
  }

  giveCorrectAnswer(): void {
    console.log(`Player ${this.playerName} has given a correct answer`);
    if (!this.inPenaltyBox) this.addPoint();
  }

  giveWrongAnswer(): void {
    console.log(`Player ${this.playerName} has given a wrong answer`);
    this.inPenaltyBox = true;
  }

  /**
   * @deprecated
   */
  get name(): string {
    return this.playerName;
  }

  private challengePenalty(): void {
    if (this.diceRoll % 2 !== 0) {
      if (this.inPenaltyBox) {
        this.isGettingOutOfPenaltyBox = true;
        console.log(`Player ${this.playerName} is getting out of penalty box`);
      }
      this.inPenaltyBox = false;
    } else {
      console.log(`Player ${this.playerName} is not getting out of penalty box`);
      console.log(`Player ${this.playerName} is not moving (${this.board.getPosition})`);
    }
  }

  private askQuestion(allQuestions: AllQuestions): void {
    console.log(allQuestions.ask(Board.getCategory(this.board.getPosition)));
  }
}

export default Player;
